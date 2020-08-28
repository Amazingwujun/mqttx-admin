<template>
  <div class="hello">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
