import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './routes.js';
import store from './store.js';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueResource);


const app = new Vue({
	el: '#app',
	router: new VueRouter({
	    routes
	}),
	render(h) {
	    return h(App)
	}
});
