import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newSongs',
      component: require('../view/NewSongs').default,
      alias: '/'
    },
    {
      path: '/rank',
      component: require('../view/rank').default
    },
    {
      path: '/plist',
      component: require('../view/plist').default
    },
    {
      path: '/plist/info/:id',
      component: require('../view/plistInfo').default
    }
  ]
})
