/* eslint-disable indent */
import Vue from 'vue';
import Router from 'vue-router';
import pages from '@/pages';

Vue.use(Router);

const router = new Router({
  mode: 'history', // 如果用 hash 會變成 /#/ping
  routes: [{
      path: '/Books',
      name: 'Books',
      meta: {
        type: 'Books',
        index: 0,
        label: 'Books',
        title: 'Books'
      },
      component: pages.Books,
    },
    {
      path: '/',
      name: 'Home',
      component: pages.Home,
    },
    {
      path: '/course/:courseid',
      name: 'Course',
      component: pages.Course,
    },
    {
      path: '/course/:courseid/:lessonid',
      name: 'Lesson',
      component: pages.Lesson,
    }
  ].map(routeRule => {
    routeRule.path = `${routeRule.path}`
    return routeRule
  })
});

export default router
