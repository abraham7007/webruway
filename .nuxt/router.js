import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2b6d5f21 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _16494a3e = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _270e5733 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _080eef34 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _64cc1ca6 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _7c741fa2 = () => interopDefault(import('../pages/project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _daa3816e = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _46c1dd84 = () => interopDefault(import('../pages/service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _4b2539e6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2b6d5f21,
    name: "about"
  }, {
    path: "/blog",
    component: _16494a3e,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _270e5733,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _080eef34,
    name: "contact"
  }, {
    path: "/project",
    component: _64cc1ca6,
    name: "project"
  }, {
    path: "/project-details",
    component: _7c741fa2,
    name: "project-details"
  }, {
    path: "/service",
    component: _daa3816e,
    name: "service"
  }, {
    path: "/service-details",
    component: _46c1dd84,
    name: "service-details"
  }, {
    path: "/",
    component: _4b2539e6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
