<template>
  <div class="HolyGrail-body">
    <div>
      这是id为{{ $route.params.id }}的任务页面
    </div>
    <router-link to="/list/all">返回列表页</router-link>
  </div>
</template>

<script>

</script>

<style scoped>
/* css也可以有作用域 */
.HolyGrail-body{background-color: red}
</style>
