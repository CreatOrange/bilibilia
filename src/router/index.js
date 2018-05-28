import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Channel from '@/components/channel'

Vue.use(Router)

export default new Router({
  routes : [
  	{ path : '/index' , component : Index },
  	{ path : '/channel/:id?' , component : Channel },
  	{ path : '/*' , redirect : '/index' }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode : 'history'
})
