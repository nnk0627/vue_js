import Vue from 'vue'

//Vue Router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//'./components/Testing.vue=@/components/Testing.vue'

import Testing from './components/Testing.vue'  
import Exercise from './components/Exercise.vue'

//Vue Router/Essentials/Dynamic Route Matching/
const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/testing', 		
      component: Testing    //Testing component ko use chin yin Testing ko import loat
    },
    { path: '/exercise', 
      component: Exercise
    }
  ],
  mode:'history'	//mode:'abstract'
});

export default router
