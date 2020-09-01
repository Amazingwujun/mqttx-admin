<template>
  <div class="nav-bar">
    <div class="nav-left">
      <i class="el-icon-s-fold" :class="{'active': isCollapse}" style="font-size: 35px; margin-left: 5px;" @click="collapse"/>
    </div>
    <div class="nav-right">
      <el-dropdown @command="handleCommand">
        <div class="avatar">
        <el-badge is-dot>
          <el-avatar
            shape="square"
            size="medium"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </el-badge>
            <span class="nickname">{{nickname}}</span>
        </div>

        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item command="signOut" divided>退出登入</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  computed: {
    nickname () {
      return this.$store.state.user.nickname
    },
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  methods: {
    handleCommand (cmd) {
      if (cmd === 'signOut') {
        this.$store.commit('signOut')
        this.$router.push('/signIn')
      }
    },
    collapse () {
      this.$store.commit('collapse')
    }
  }
}
</script>

<style scoped>
.nav-bar {
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

.avatar {
    cursor: pointer;
}

.el-icon-s-fold.active {
  transform: rotate(180deg);
}
</style>
