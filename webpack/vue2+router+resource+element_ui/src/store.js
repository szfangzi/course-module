import Vue from 'vue';

const store = new Vue({
  data:{
    todos: [],
    // newTodo:'',
    ws:"",
    wsInterval:""
  },
  methods:{
    todosGet () {
      this.ws = new WebSocket("ws://localhost:3000/todos");
      this.ws.onmessage = function (e) {
        this.todos = JSON.parse(e.data);
      }.bind(this);
      this.ws.onopen = function(e) {
        this.ws.send("1");
      }.bind(this);

      this.wsInterval = setInterval(function() {
        if(this.ws.readyState === 1){
          this.ws.send("1");
        }else if(this.ws.readyState === 3){
          this.ws.close();
          this.ws = new WebSocket("ws://localhost:3000/todos");
          this.ws.onmessage = function (e) {
            this.todos = JSON.parse(e.data);
          };
        }

      }.bind(this), 3000);
    },
    todosGetStop (){
      this.wsInterval && clearInterval(this.wsInterval);
      this.ws && this.ws.close();
    },
    todosDelete(id){
      // console.log(this,id);
      this.$http.delete('/todos/'+id).then(function (res) {
        var obj = this.todos.map(function(v, i) {
          return {v:v,i:i};
        }).filter(function(obj, i) {
          return obj.v.id === id;
        })[0];
        this.todos.splice(obj.i, 1);
      }.bind(this), function (err) {
        console.log(err);
      });
    },
    todosPost(newTodo, callback){
      this.$http.post('/todos',{
        name:newTodo
      }).then(function (res) {
        this.todos.push(res.data);
        callback();
      }.bind(this), function (err) {
        console.log(err);
      });
    },
    todosPut(id, e){
      this.$http.put('/todos/'+id, {
        isTick:e.target.checked
      }).then(function (res) {
        var id = res.data.id;
        var isTick = res.data.isTick;
        this.todos.map(function (n) {
          if(n.id == id){
            n.isTick = isTick;
          }
        })
      }.bind(this), function (err) {
        console.log(err);
      });
    },
    todosDelf(){
      let filteredTodosIds = this.todos.filter(todo => todo.isTick).map(todo => todo.id).join(',');
      this.$http.post('/todos/delf', {
        filteredTodosIds:filteredTodosIds
      }).then(function (res) {
        this.todos = this.todos.filter(todo => !todo.isTick);
      }.bind(this), function (err) {
        console.log(err);
      });
    }
  }
});
export default store;
