<template>
  <div class="side-bar">
    <transition name="fade">
    <div class="logo" v-if="!isCollapse">
      <img src="@/assets/logo.png" width="50%" />
    </div>
    </transition>

    <el-menu
      default-active="1"
      background-color="#191a23"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
    >
      <el-submenu index="/topic">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">主题中心</span>
        </template>
        <el-menu-item index="/topic/list">主题列表</el-menu-item>
      </el-submenu>
      <el-submenu index="/user">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>用户中心</span>
        </template>
        <el-menu-item index="/user/list">用户列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  background-color: #191a23;
}

.el-menu{
  flex-grow: 1;
  border-right: 0px;
}

.el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.logo {
  text-align: center;
  width: 200px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
