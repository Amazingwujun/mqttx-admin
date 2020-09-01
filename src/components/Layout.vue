<template>
  <div class="layout">
    <side-bar/>
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

.content {
  flex-grow: 1;
  padding: 5px;
  background-color: #f0f2f5;
}
</style>
