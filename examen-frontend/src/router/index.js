import { createRouter, createWebHistory } from 'vue-router'

import Calificaciones from '../components/Calificaciones.vue'
import FormularioRegistro from '../components/FormularioRegistro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/calificaciones',
    },
    {
      path: '/calificaciones',
      name: 'calificaciones',
      component: Calificaciones,
    },
    {
      path: '/registro',
      name: 'registro',
      component: FormularioRegistro,
    }
  ],
})

export default router
