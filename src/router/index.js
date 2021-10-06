import Vue from 'vue'
import VueRouter from 'vue-router'
// Main Views
import DestinationsView from  '../views/DestinationsView.vue'
import FavoritesView from     '../views/FavoritesView'
import HelpView from          '../views/HelpView.vue'
import MyProfileView from     '../views/MyProfileView.vue'

// Thematic Learn Session
import thematicLearnSessionView from '../modules/thematicLearnSession/views/defaultView'
import introView from '../modules/thematicLearnSession/views/introView'
//import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DestinationsView
  },
  {
    path: '/learn/:place',
    component: thematicLearnSessionView,
    children: [
      {
        path: '/',
        component: introView
      }
    ]
  },
  {
    path: '/favorites',
    component: FavoritesView
  },
  {
    path: '/profile',
    component: MyProfileView
  },
  {
    path: '/help',
    component: HelpView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
