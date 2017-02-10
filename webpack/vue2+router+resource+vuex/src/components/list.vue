<template>
  <div class="HolyGrail-body">
    <ul>
      <li v-for="todo in todos"><router-link :to="'/list/'+todo.id">{{todo.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      todos:[],
      ws:""
    }
  },
  created:function() {
    this.$on('init', this.init);
    this.$emit('init');
    window.onhashchange = function() {
      if(location.hash != '#/list'){
        this.ws.close();
      }
    }.bind(this);
  },
  methods:{
    init:function() {
      this.ws = new WebSocket("ws://localhost:3000/todos");
      this.ws.onmessage = function (e) {
        this.todos = JSON.parse(e.data);
      }.bind(this);
      this.ws.onopen = function(e) {
        this.ws.send("1");
      }.bind(this);

      var interval = setInterval(function() {
        if(this.ws.readyState === 1){
          this.ws.send("1");
        }else if(this.ws.readyState === 3 && location.hash === '#/list'){
          this.ws.close();
          this.ws = new WebSocket("ws://localhost:3000/todos");
          this.ws.onmessage = function (e) {
            this.todos = JSON.parse(e.data);
          }.bind(this);
        }else{
          clearInterval(interval);
          this.ws.close();
        }

      }.bind(this), 3000);
    }
  }
}
</script>

<style>

</style>
