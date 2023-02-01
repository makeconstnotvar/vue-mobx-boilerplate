import { createApp } from 'vue';
import LandingPage from './pages/LandingPage'
import CharactersPage from './pages/CharactersPage'
import LocationsPage from './pages/LocationsPage'
import EpisodsPage from './pages/EpisodsPage'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/characters', component: CharactersPage },
    { path: '/locations', component: LocationsPage },
    { path: '/episods', component: EpisodsPage },
  ]
})
const app = createApp({});
app.use(router);
app.mount('#app');
