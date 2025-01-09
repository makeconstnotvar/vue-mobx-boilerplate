import {createRouter, createMemoryHistory} from 'vue-router'
import LandingPage from './pages/LandingPage.vue';
import CharactersPage from './pages/CharactersPage';
import LocationsPage from './pages/LocationsPage';
import EpisodsPage from './pages/EpisodsPage';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/ram', component: LandingPage, children: [
        {path: '/characters', component: CharactersPage},
        {path: '/locations', component: LocationsPage},
        {path: '/episods', component: EpisodsPage},
      ]
    },

  ]
})
export {router}