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
        <el-form :model="signUpDto">
        <el-form-item>
          <el-input v-model="signUpDto.mobile" placeholder="11位手机号">
            <el-select v-model="value" slot="prepend" placeholder="请选择">
                <el-option label="+86" value="86"></el-option>
                <el-option label="+87" value="87"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input type='password' v-model="signUpDto.password" placeholder="至少六位密码，区分大小写" prefix-icon="el-icon-key" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type='password' v-model="signUpDto.password2" placeholder="密码确认" prefix-icon="el-icon-key" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <div style="display: flex;justify-content: space-between;">
            <el-button style="width: 50%" type="primary">注册</el-button> <router-link class="sign-in" :to="{path: '/signIn'}">使用已有账号登入</router-link>
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
export default {
  name: 'sign-up',
  data () {
    return {
      signUpDto: {
        mobile: '',
        password: '',
        password2: ''
      },
      value: '86'
    }
  },
  methods: {
    signUp () {

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
