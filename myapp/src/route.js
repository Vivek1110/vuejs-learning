
import NewsDetail from './components/NewsDetail'
import HeadLine from './components/HeadLine'

export const routes = [
    { path: '/details/:id', component: NewsDetail },
    { path: '/', component: HeadLine }
]