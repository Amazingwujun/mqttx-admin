<template>
  <div class="sign-up">
    <div class="main">
      <div class="logo">
        <img src="@/assets/logo.png" width="50%" />
        <br />
        <span class="slogon">易于使用的 mqtt broker</span>
      </div>
      <div style="margin: 0px 0px 15px 3px">
          <span>注册</span>
      </div>
      <div class="sign-up-form">
        <el-form ref='formRoles' :model="signUpDto" :rules="formRules">
        <el-form-item prop="mobile">
          <el-input v-model="signUpDto.mobile" placeholder="11位手机号">
            <el-select v-model="value" slot="prepend" placeholder="请选择">
                <el-option label="+86" value="86"></el-option>
                <el-option label="+87" value="87"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item prop="nickname">
          <el-input v-model="signUpDto.nickname" placeholder="昵称" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="signUpDto.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type='password' v-model="signUpDto.password" placeholder="至少六位密码，区分大小写" prefix-icon="el-icon-key" show-password></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input type='password' v-model="signUpDto.password2" placeholder="密码确认" prefix-icon="el-icon-key" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <div style="display: flex;justify-content: space-between;">
            <el-button style="width: 50%" type="primary" @click="signUp">注册</el-button> <router-link class="sign-in" :to="{path: '/signIn'}">使用已有账号登入</router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
    </div>
    <div class="footer">
      <span>Copyright © 2020 Amazingwujun</span>
    </div>
  </div>
</template>

<script>
import {signUp} from '@/api/user'

export default {
  name: 'sign-up',
  data () {
    const mobileValidator = (rule, value, callback) => {
      if (!value) {
        callback(new Error('手机号码不能为空'))
      } else {
        const reg = /1[1-9]{2}[0-9]{8}/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入11位手机号码'))
        }
      }
    }
    let emailValidator = (rule, value, callback) => {
      if (!value) {
        callback(new Error('邮箱不能为空'))
      } else {
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的邮箱地址'))
        }
      }
    }
    let pwdValidator = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空'))
      } else {
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
        if (reg.test(value)) {
          callback()
        } else {
          callback(new Error('密码必须含有数字和字母，长度在6-20个字符'))
        }
      }
    }
    let pwd2Validator = (rule, value, callback) => {
      if (!value) {
        callback(new Error('确认密码不能为空'))
      } else {
        if (this.signUpDto.password !== this.signUpDto.password2) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      }
    }

    return {
      signUpDto: {
        mobile: '',
        nickname: '',
        email: '',
        password: '',
        password2: ''
      },
      value: '86',
      formRules: {
        mobile: [
          {validator: mobileValidator, trigger: ['blur', 'change']}
        ],
        email: [
          {validator: emailValidator, trigger: ['blur', 'change']}
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { max: 20, message: '长度不能超过 20 个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          {validator: pwdValidator, trigger: ['blur', 'change']}
        ],
        password2: [
          {validator: pwd2Validator, trigger: ['blur', 'change']}
        ]
      }
    }
  },
  methods: {
    signUp () {
      this.$refs['formRoles'].validate(valid => {
        if (valid) {
          signUp(this.signUpDto).then(data => {
            this.$message({
              message: '注册成功',
              type: 'success',
              duration: 3000
            })

            this.$router.push('/signIn')
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.el-select  {
    width: 75px;
}

.sign-up {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://preview.pro.antdv.com/assets/background.a568162c.svg");
  background-repeat: no-repeat;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  margin-top: -150px;
  width: 368px;
}

.slogon {
  font-size: 14px;
  color: #00000073;
}

.logo {
  margin-bottom: 50px;
  text-align: center;
}

.footer {
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 20px;
}

.sign-in {
  color: #1890ff;
}

</style>
