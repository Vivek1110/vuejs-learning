import NewsDetail from './components/NewsDetail.vue';
import HeadLine from './components/HeadLine.vue';

const routes = [
  { path: '/details/:id', component: NewsDetail },
  { path: '/', component: HeadLine },
];

export default routes;
