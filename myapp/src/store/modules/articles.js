import {data} from '../data';

const state = {
    articles: data,
    loading: false,
    sources: []
};

const getters = {
    'articles': state => {
        return state.articles
    },
    'loading': state => {
        return state.loading
    }
};

const mutations = {
    'updateTitle': (state, payload) => {
        state.articles[payload.index]['title'] = payload.title
    },
    'SET_ARTICLE': (state, payload) => {
        state.articles = payload
    },
    'SET_LOADING': (state, payload) => {
        state.loading = payload
    },
    'SET_SOURCE': (state, payload) => {
        state.sources = payload
    }
};

const actions = {
   'updateTitleAction': ({ commit }, payload) => {
        commit('updateTitle', payload)
   }
};

export default {
    state,
    mutations,
    actions,
    getters
}