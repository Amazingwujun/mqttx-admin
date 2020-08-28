<template>
  <div class="layout">
    <div class="sider-bar">
      <div class="logo">
        <img src="@/assets/logo.png" width="50%" />
      </div>

      <el-menu default-active="1" background-color="#191a23"   text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index='1'>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot='title'>设备中心</span>
          </template>
          <el-menu-item index>设备列表</el-menu-item>
        </el-submenu>
        <el-submenu index ='2'>
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>用户中心</span>
          </template>
          <el-menu-item index>用户管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main">
      <div class="nav">
        <div class="nav-left">

        </div>
        <div class="nav-right">
          <el-dropdown @command="handleCommand">
            <el-badge is-dot>
              <el-avatar shape="square" size='medium' src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <span>{{nickname}}</span>
            </el-badge>
            <el-dropdown-menu>
              <el-dropdown-item >个人中心</el-dropdown-item>
              <el-dropdown-item >设置</el-dropdown-item>
              <el-dropdown-item command='signOut' divided>推出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    nickname () {
      return this.$store.state.user.nickname
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'signOut') {
        this.$store.commit('signOut')
        this.$router.push('/signIn').catch(err => { console.log(err) })
      }
    }
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  height: 100%;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.sider-bar {
  width: 240px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  background-color: #191a23;
}

.el-menu{
  flex-grow: 1;
  border-right: 0px;
}

.logo {
  text-align: center;
}

.nav{
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  border-bottom: solid 1px #e6e6e6;
}

.nav-right {
  margin-right: 15px;
}

.content {
  flex-grow: 1;
  padding: 5px;
}
</style>
