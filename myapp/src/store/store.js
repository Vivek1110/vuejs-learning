import Vue from 'vue';
import Vuex from 'vuex';
import articles from './modules/articles'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        articles: articles
    }
})