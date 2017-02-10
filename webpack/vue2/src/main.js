import Vue from 'vue';
import routes from './routes.js'

var app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.hash
    },
    created: function() {
		  window.addEventListener('hashchange', () => {
  			app.currentRoute = window.location.hash
		  });
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute]
        }
    },
    render(h){
        return h(this.ViewComponent)
    }
});
