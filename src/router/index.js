import Vue from "vue";
import Router from "vue-router";
import home from "./home";

Vue.use(Router);
const routes = [
  home,
  {
    path: '/repair_history',
    component: () => import('../views/home/repair_history'),
  },
  {
    path: '/manage_list',
    component: () => import('../views/home/manage_list'),
  },
  {
    path: '/work_order',
    component: () => import('../views/home/work_order'),
  },
  {
    path: '/type_list',
    component: () => import('../views/home/type_list'),
  },
  {
    path: '/fault_repair',
    component: () => import('../views/home/fault_repair'),
  },
  {
    path: '/check_list',
    component: () => import('../views/home/check_list'),
  },
  {
    path: '/check_rule',
    component: () => import('../views/home/check_rule'),
  },
  {
    path: '/check_history',
    component: () => import('../views/home/check_history'),
  },
  {
    path: '/check_project',
    component: () => import('../views/home/check_project'),
  },
  {
    path: '/maintenance_rules',
    component: () => import('../views/home/maintenance_rules'),
  },
  {
    path: '/maintenance_list',
    component: () => import('../views/home/maintenance_list'),
  },
  {
    path: '/new_equipment',
    component: () => import('../views/home/new_equipment'),
  },
  {
    path: '/add_accessories',
    component: () => import('../views/home/add_accessories'),
  },
  {
    path: '/equipment_repair',
    component: () => import('../views/home/equipment_repair'),
  },
  {
    path: '/add_rules',
    component: () => import('../views/home/add_rules'),
  },
  {
    path: '**',
    redirect: '/home'
  }
];
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})
