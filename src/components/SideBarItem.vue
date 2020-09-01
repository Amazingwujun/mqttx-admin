<template>
  <div v-if="!item.hidden">
    <template v-if="!item.isChild">
      <el-submenu :index="item.path">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </template>
      <side-bar-item/>
      </el-submenu>
    </template>
    <template v-else>

    </template>
  </div>
</template>

<script>
export default {
  name: 'side-bar-item',
  props: {

  }
}
</script>

<style>

</style>
