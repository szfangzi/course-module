import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './routes.js';
import store from './store.js';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

const app = new Vue({
	el: '#app',
	router: new VueRouter({
	    routes
	}),
	render(h) {
	    return h(App)
	}
});
