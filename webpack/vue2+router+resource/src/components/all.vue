<style>

</style>

<template>
<!--所有任务-->
<ul>
	<li v-for="todo in todos" v-bind:class="{'del-line':todo.isTick}"><input type="checkbox" v-model="todo.isTick" v-on:click="tick(todo.id, $event)" ><router-link :to="'/task/'+todo.id">{{todo.name}}</router-link><button v-on:click="del(todo.id)">x</button></li>
</ul>
</template>

<script>

import store from '../store.js';

export default {
	computed:{
    todos(){
   		return store.todos;
    }
	},
	methods:{
		//    删除任务
		del: function (id) {
		  store.todosDelete(id);
		},
		tick: function (id, e) {
		  store.todosPut(id, e);
		},
	}
}
</script>
