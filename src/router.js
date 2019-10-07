/* eslint-disable no-unused-vars */
/*jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import Skills from './components/skills.vue';
import About from './components/About.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'skills',
            component: Skills
        },
        {
            path: '/about/:name',
            name: 'About',
            component: About
        }
    ]
});