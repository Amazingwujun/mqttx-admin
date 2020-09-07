<template>
  <div class="user-list">
    <el-card>
      <el-table :data="userList" border>
        <el-table-column label="id" prop="id" ></el-table-column>
        <el-table-column label="昵称" prop="nickname"></el-table-column>
        <el-table-column label="手机号" prop="mobile"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="创建时间" prop="createTime"></el-table-column>
      </el-table>
    </el-card>

  </div>
</template>

<script>
import { getUserList } from '@/api/user'

export default {
  name: 'user-list',
  data () {
    return {
      userList: []
    }
  },
  created: function () {
    getUserList().then(data => {
      console.log(data)
      this.userList = data
    }, () => {})
  }
}
</script>

<style scoped>

</style>
