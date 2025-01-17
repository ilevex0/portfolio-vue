import { createRouter, createWebHistory } from 'vue-router'

// Importando as views (ou componentes) que serão as páginas da sua aplicação
import HomePage from '../pages/HomePage.vue'

// Definindo as rotas
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
]

// Criando o roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
