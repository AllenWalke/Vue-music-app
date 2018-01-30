import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'recommend'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
