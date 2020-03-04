import Vue from 'vue';
import VueRouter from 'vue-router';

import axios from 'axios';
import store from './store';

import {routes} from './routes';
import * as services from './services';

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({x: 0, y: 0});
            }, 200);
        });
    }
};

let router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior
})

router.beforeEach((to, from, next) => {
    let serverData = JSON.parse(window.laravelDataLayer);
    if (to.name === 'posts' && store.state.views[to.name]) {
        next();
    }

    else if (to.name === 'home' && store.state.views[to.name]) {
        next();
    }

    else if (to.name === 'about' && store.state.views[to.name]) {
        next();
    }

    else if (to.name === 'portfolio' && store.state.views[to.name]) {
        next();
    }
    else if (to.name === 'services' && store.state.views[to.name]) {
        next();
    }
    else if (to.name === 'contact' && store.state.views[to.name]) {
        next();
    }
    else if (to.name === 'post' && store.state.components.posts && store.state.components.posts[to.params.slug]) {
        next();
    } else if (!serverData.path || to.path !== serverData.path) {
        services.getData(to.path).then(({data}) => {
            store.commit('addData', {route: to.name, data});
            next();
        });
    } else {
        store.commit('addData', {route: to.name, data: serverData});
        next();
    }
})

export default router;
