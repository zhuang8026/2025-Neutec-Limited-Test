import Basic_A1 from '@/views/basic_a1/index.vue';
import Basic_A2 from '@/views/basic_a2/index.vue';

const routes = [
    {
        path: '/vue-squares/',
        name: 'Basic_A1',
        component: Basic_A1,
        meta: {
            requiresAuth: true,
            layout: 'default', // header, footer, nav
        },
    },
    {
        path: '/basic_a2',
        name: 'Basic_A2',
        component: Basic_A2,
        meta: {
            requiresAuth: true,
            layout: 'default', // header, footer, nav
        },
    },
];

export default routes;
