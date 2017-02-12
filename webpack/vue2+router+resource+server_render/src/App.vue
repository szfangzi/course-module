<style>
*{padding: 0;margin: 0;}
body{
  font-size: 12px;
}
.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

}
header h1{
  text-align: center;
  width: 100%;
  font-size: 14px;
  font-weight: normal;
}
header,
footer {
  flex: 0 0 1.5em;
  padding: 5px;
  background-color: #eee;
  display: flex;
}
.HolyGrail-body {
  display: flex;
  flex-direction: column;
  flex: 1;
}

footer a{
  flex: 1;
  text-align: center;
}
</style>

<template>
<div id="app" class="HolyGrail">
  <header><h1>这是app的顶部</h1></header>
  <router-view></router-view>
  <bmenu></bmenu>
</div>

</template>

<script>
import bmenu from './components/bmenu.vue';

export default {
  components:{
    bmenu
  }
}
</script>
