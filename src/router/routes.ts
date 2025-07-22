// import Login from '@/views/user/login/index.vue';

import Dashboard from '@/views/dashboard/index.vue';
import Device from '@/views/device/index.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true,
            layout: 'default', // header, footer, nav
        },
    },
    {
        path: '/device',
        name: 'Device',
        component: Device,
        meta: {
            requiresAuth: true,
            layout: 'default', // header, footer, nav
        },
    },
];

export default routes;
