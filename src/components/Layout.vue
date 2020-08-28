<template>
  <div class="layout">
    <div class="sider-bar">
      <side-bar/>
    </div>
    <div class="main">
      <nav-bar></nav-bar>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar'
import NavBar from './NavBar'

export default {
  name: 'layout',
  components: {
    SideBar,
    NavBar
  },
  computed: {
    nickname () {
      return this.$store.state.user.nickname
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

.content {
  flex-grow: 1;
  padding: 5px;
}
</style>
