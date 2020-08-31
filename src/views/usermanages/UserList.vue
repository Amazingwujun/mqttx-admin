<template>
  <div class="user-list">
    <el-card>
      <el-table :data="userList" style="width: 100%">
        <el-table-column label="id" prop="id" width="100"></el-table-column>
        <el-table-column label="昵称" prop="nickname"></el-table-column>
        <el-table-column label="手机号" prop="mobile"></el-table-column>
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
      this.userList = data
    }, () => {})
  }
}
</script>

<style scoped>

</style>
