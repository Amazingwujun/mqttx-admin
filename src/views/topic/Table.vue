<template>
  <div class="topic-list">
    <el-card>
        <el-table :data="topicList" border >
          <el-table-column label="id" prop="id"></el-table-column>
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="描述" prop="remark"></el-table-column>
          <el-table-column label="创建时间" prop="createTime"></el-table-column>
          <el-table-column label="操作" width="150">
              <template slot-scope='scope'>
                  <el-button @click="update(scope.row)" type="primary" size="small">更新</el-button>
                  <el-button @click="del(scope.row)" type="primary" size="small">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<script>
// import { getAllTopics, deleteTopic, createTopic, updateTopic } from '@/api/topic'
import { getAllTopics, deleteTopic } from '@/api/topic'

export default {
  name: 'topic-list',
  data () {
    return {
      topicList: []
    }
  },
  created: function () {
    this.getAll({page: 1, size: 10})
  },
  methods: {
    getAll (page) {
      getAllTopics(page).then(data => {
        console.log(data)
        this.topicList = data.list
      }, () => {
        // ignore err, it handle by request.js
      })
    },
    del (row) {
      const {id} = row
      deleteTopic(id).then(data => {
        for (let i = 0; i < this.topicList.length; i++) {
          const element = this.topicList[i]
          if (element.id === id) {
            this.topicList.splice(i, 1)
            break
          }
        }

        this.$message({
          message: '操作成功',
          type: 'success',
          duration: 1500
        })
      }, () => {})
    }
  }
}
</script>

<style>

</style>
