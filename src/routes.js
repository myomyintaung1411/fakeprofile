import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    name: 'Main',
    meta: { title: 'Main' },
    component: Main,
    redirect: '/home',
    children:[
      {
        path: '/home',
        name: 'Home',
        meta: { title: 'Home' },
        component: () => import('./views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        meta: { title: 'About' },
        component: () => import('./views/About.vue')
      },
      {
        path: '/info',
        name: 'Info',
        meta: { title: 'Info' },
        component: () => import('./views/Info.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        meta: { title: 'Contact' },
        component: () => import('./views/Contact.vue')
      },
    ]
  },

  { path: '/:path(.*)', component: NotFound },
]
