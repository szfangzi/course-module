import Index from './components/index.vue';
import About from './components/about.vue';
import List from './components/list.vue';
import Task from './components/task.vue';
import All from './components/all.vue';
import Unf from './components/unf.vue';
import F from './components/f.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/list', component: List, 
  	children:[
  		{ path:'all', component: All },
  		{ path:'unf', component: Unf },
  		{ path:'f', component: F }
  	]
  },
  { path: '/task/:id', component: Task }
];
export default routes
