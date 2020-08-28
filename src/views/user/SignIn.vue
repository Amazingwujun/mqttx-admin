<template>
  <div class="login-page">
    <div class="main">
      <div class="logo">
        <img src="@/assets/logo.png" width="50%" />
        <br />
        <span class="slogon">易于使用的 mqtt broker</span>
      </div>
      <div class="login-form">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane label="密码登入" name="pwd">
            <el-form :model="pwdSignInForm" :rules="formRules" ref='ruleForm'>
              <el-form-item prop="mobile">
                <el-input v-model="pwdSignInForm.mobile" placeholder="手机号" prefix-icon="el-icon-mobile"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="pwdSignInForm.password"
                  type="password"
                  placeholder="密码"
                  prefix-icon="el-icon-key"
                  show-password
                ></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="验证码登陆" name="code">
            <el-form :model="loginForm" :rules="formRules">
              <el-form-item prop="mobile">
                <el-input v-model="loginForm.mobile" placeholder="手机号" prefix-icon="el-icon-mobile">
                  <el-button
                    class="checkCode"
                    type="primary"
                    slot="append"
                    @click="sendCheckCode"
                  >{{counters}}</el-button>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="loginForm.password"
                  type="password"
                  placeholder="验证码"
                  prefix-icon="el-icon-key"
                ></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-button style="width: 100%;" type="primary" @click="signIn">登入</el-button>
          <div class="flex-box-right">
             <router-link class="sign-up" :to="{path: '/signUp'}">注册账号</router-link>
          </div>
        </el-tabs>
      </div>
    </div>
    <div class="footer">
      <span>Copyright © 2020 Amazingwujun</span>
    </div>
  </div>
</template>

<script>
import { signIn } from '@/api/user'

const notice = '发送验证码'

export default {
  name: 'sign-in',
  data () {
    let mobileValidator = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号'))
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

    return {
      loginForm: {
        mobile: '',
        checkCode: ''
      },
      pwdSignInForm: {
        mobile: '',
        password: ''
      },
      checkCode: notice,
      activeName: 'pwd',
      formRules: {
        mobile: [
          { validator: mobileValidator, trigger: ['blur', 'change'] }
        ],
        password: [
          { validator: pwdValidator, trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  computed: {
    counters () {
      if (typeof this.checkCode === 'number') {
        return this.checkCode + 'S'
      } else {
        return this.checkCode
      }
    }
  },
  methods: {
    signIn () {
      // 暂时不支持验证码登录
      if (this.activeName === 'code') {
        this.$message({
          message: 'mqttx admin 暂不支持验证码登录',
          type: 'warning',
          duration: 3000
        })
        return
      }

      // 密码登入
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          signIn(this.pwdSignInForm).then(data => {
            this.$store.commit('signIn', data)
            this.$router.push('/')
          }, () => {})
        }
      })
    },
    sendCheckCode () {
      if (typeof this.checkCode === 'number') {
        return
      }

      // 倒计时60S
      if (this.checkCode === notice) {
        this.checkCode = 60
      }

      let interval = setInterval(() => {
        if (this.checkCode > 0) {
          --this.checkCode
        } else {
          this.checkCode = notice
          clearInterval(interval)
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("https://preview.pro.antdv.com/assets/background.a568162c.svg");
  background-repeat: no-repeat;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-top: -150px;
  width: 368px;
}

.checkCode {
  width: 112px;
}

.logo {
  margin-bottom: 50px;
  text-align: center;
}

.login-form {
  width: 100%;
}

.slogon {
  font-size: 14px;
  color: #00000073;
}

.footer {
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 20px;
}

.sign-up {
  color: #1890ff;
  margin-top: 10px;
}

.flex-box-right {
  display: flex;
  flex-direction: row-reverse;
}
</style>
