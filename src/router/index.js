import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import NoticiaComponent from '../components/NoticiaComponent.vue';
import SobreComponent from '@/components/SobreComponent.vue';
import VisiteComponent from '@/components/VisiteComponent.vue';
import MaisSobreObairroComponent from '@/components/MaisSobreObairro.component.vue';
// ... importe os outros componentes de página

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/noticias', component: NoticiaComponent },
  { path: '/sobre', component: SobreComponent },
  { path: '/visite', component: VisiteComponent },
  { path: '/mais-sobre-o-bairro', component: MaisSobreObairroComponent },

  // adicione as rotas para as outras páginas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
