import Vue from 'vue'
import Router from 'vue-router'
import AllMovies from '@/components/AllMovies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllMovies',
      component: AllMovies
    }
  ]
})
