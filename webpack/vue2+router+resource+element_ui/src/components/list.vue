<template>
  <div class="HolyGrail-body">
    <h1>任务列表</h1>
    <div>
      <input type="text" v-model="newTodo" v-on:keypress.enter="add">
    </div>
    <router-view></router-view>
    <span>还剩下<b>{{unFLen}}</b>个未完成的任务</span>
    <div class="btn-box">
      <router-link to="/list/all">所有任务</router-link>
      <router-link to="/list/unf">未完成的任务</router-link>
      <router-link to="/list/f">已完成的任务</router-link>
      <el-button type="primary" v-on:click="delf">删除所有已完成的任务</el-button>
      <!-- <a href="javascript:;" v-on:click="delf">删除所有已完成的任务</a> -->
    </div>
  </div>
</template>

<script>

import store from '../store.js';

export default {
  data(){
    return {
      newTodo:''
    }
  },
  beforeRouteEnter (to, from, next) {
    store.todosGetStop();
    store.todosGet();
    next();
  },
  beforeRouteLeave (to, from, next) {
    store.todosGetStop();
    next();
  },
  computed:{
    todos(){
      return store.todos;
    },
    unFLen(){
      return this.todos.filter(todo => !todo.isTick).length;
    }
  },
  methods:{
    //      新增任务
    add: function () {
      store.todosPost(this.newTodo, function() {
        this.newTodo = '';
      }.bind(this));
    },
    delf: function () {
      store.todosDelf();
    }
  }
}
</script>

<style>

</style>
