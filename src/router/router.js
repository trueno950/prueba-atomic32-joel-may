import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/landing/Landing.vue'
import Form from '../views/form/Form.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Landing },
        { path: '/form', component: Form },
    ]
})

export default router