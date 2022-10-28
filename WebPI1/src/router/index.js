import { createRouter,createWebHistory } from 'vue-router';
import Home from '../views/Home/index.vue';
import RegistoAtividades from '../views/RegistoAtividades/index.vue';
import PlanoAtividades from '../views/PlanoAtividades/index.vue';
import Dashboard from '../views/Dashboard/index.vue';
import Admin from '../views/Admin/index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {

            path : '/',
            component: Home
        }
            ,
        {
            path : '/RegistoAtividades',
            component: RegistoAtividades
        }   
            ,
        {
            path : '/PlanoAtividades',
            component: PlanoAtividades
        }
            ,
        {
            path : '/Dashboard',
            component: Dashboard
        }
        ,
        {
            path : '/Admin',
            component: Admin
        }



    ]
})

export default router