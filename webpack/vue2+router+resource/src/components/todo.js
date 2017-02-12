var todoMixin = {
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
export default todoMixin;