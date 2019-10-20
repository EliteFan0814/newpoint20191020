import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloEarth from '@/components/HelloEarth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:wordId',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloearth/:earthId',
      name: 'HelloEarth',
      component: HelloEarth
    }
  ]
})
