<template>
  <div class="HolyGrail-body">
    这是介绍页<button v-on:click="clickEvent">子调父点击事件</button>
  </div>
</template>

<script>
import eventHub from '../event.js';
export default {
  created:function() {
    eventHub.$on('test2', this.test2);
  },
  methods:{
    clickEvent:function() {
      eventHub.$emit('test');
    },
    test2:function() {
      alert('test2!');
    }
  }
}
</script>

<style>

</style>
