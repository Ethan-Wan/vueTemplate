import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/layout'
import ServerPage from './pages/server'
import JvmPage from './pages/jvm'
import InterfacePage from './pages/interface'
import ExceptionPage from './pages/exception'
import ConfigPage from './pages/configuration'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: ServerPage
    },
    {
      path: '/exception',
      component: ExceptionPage
    },
    {
      path: '/jvm',
      component: JvmPage
    },
    {
      path: '/interface',
      component: InterfacePage
    },
    {
      path: '/configuration',
      component: ConfigPage
    }
  ]
})
