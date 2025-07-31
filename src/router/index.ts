import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Factory from '../views/Pattern/FactoryMethodView.vue'
import Abstract from '../views/Pattern/AbstractFactoryView.vue'
import Builder from '../views/Pattern/BuilderView.vue'
import Prototype from '../views/Pattern/PrototypeView.vue'
import Singleton from '../views/Pattern/SingletonView.vue'
import Adapter from '../views/Pattern/AdapterView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/factory',
    name: 'factory',
    component: Factory
  },
  {
    path: '/abstract',
    name: 'abstract',
    component: Abstract
  },
  {
    path: '/builder',
    name: 'builder',
    component: Builder
  },
  {
    path: '/prototype',
    name: 'prototype',
    component: Prototype
  },
  {
    path: '/singleton',
    name: 'singleton',
    component: Singleton
  },
    {
    path: '/adapter',
    name: 'adapter',
    component: Adapter
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
