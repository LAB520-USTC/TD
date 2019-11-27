import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: 'appointment',
          component: ()=> import('../components/appointment.vue')
        },
        {
          path: 'myappointment',
          component: ()=> import('../components/myappointment.vue')
        },
        {
          path: 'my',
          component: ()=> import('../components/my.vue')
        }
      ]
    }
  ]
})
