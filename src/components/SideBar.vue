<template>
  <div>
    <div class="logo">
      <img src="@/assets/logo.png" width="50%" />
    </div>

    <el-menu
      default-active="1"
      background-color="#191a23"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">设备中心</span>
        </template>
        <el-menu-item index>设备列表</el-menu-item>
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
  name: 'side-bar'
}
</script>

<style scoped>

.el-menu{
  flex-grow: 1;
  border-right: 0px;
}

.logo {
  text-align: center;
}

</style>
