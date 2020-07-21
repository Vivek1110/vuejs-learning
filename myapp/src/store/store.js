import Vue from 'vue';
import Vuex from 'vuex';
import articles from './modules/articles'
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    modules: {
        articles: articles
    }
})