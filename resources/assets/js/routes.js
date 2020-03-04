/**
 * Project Routes
 *
 * Each route needs to be defined here and
 * in the Laravel Web Routes.
 *
 * Each route points to a Component, which
 * consumes required data from the store
 *
 */

// Components
import TheHomePage from './views/TheHomePage';
import ThePostPage from './views/ThePostPage';

import TheAboutPage from './views/TheAboutPage';

import ThePostsPage from './views/ThePostsPage';

import ThePortfoliosPage from './views/ThePortfoliosPage';

import TheServicesPage from './views/TheServicesPage';


import TheContactPage from './views/TheContactPage';

// Routes
export const routes = [
    {path: '/', component: TheHomePage, name: 'home'},
    {path: '/posts/:slug', component: ThePostPage, name: 'post'},

    {path: '/about', component: TheAboutPage, name: 'about'},
    {path: '/posts', component: ThePostsPage, name: 'posts'},

    {path: '/portfolio', component: ThePortfoliosPage, name: 'portfolio'},

    {path: '/services', component: TheServicesPage, name: 'services'},
    {path: '/contact', component: TheContactPage, name: 'contact'},
];

// EOF
