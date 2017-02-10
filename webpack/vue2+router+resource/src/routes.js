import Index from './components/index.vue';
import About from './components/about.vue';
import List from './components/list.vue';
import Task from './components/task.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/list', component: List },
  { path: '/list/:id', component: Task }
];
export default routes
