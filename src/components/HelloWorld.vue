<template>
  <div class="hello">
    <el-button type="primary" @click='logout'>logout</el-button>
    <h1>{{ nickname }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello mqttx-admin'
    }
  },
  computed: {
    nickname () {
      return this.$store.state.user.nickname
    }
  },
  methods: {
    logout () {
      this.$store.commit('signOut')
      this.$router.push('/signIn')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
