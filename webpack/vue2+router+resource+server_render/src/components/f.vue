<style>

</style>

<template>
<!--已完成任务-->
<ul>
	<li v-for="todo in todos" v-bind:class="{'del-line':todo.isTick}"><input type="checkbox" v-model="todo.isTick" v-on:click="tick(todo.id, $event)" ><router-link :to="'/task/'+todo.id">{{todo.name}}</router-link><button v-on:click="del(todo.id)">x</button></li>
</ul>
</template>

<script>

import store from '../store.js';
import todoMixin from './todo.js';

export default {
	mixins: [todoMixin],
	computed:{
    todos(){
     	return store.todos.filter(todo => todo.isTick);
    }
	}
}
</script>
