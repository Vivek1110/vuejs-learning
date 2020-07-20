import {data} from '../data';

const state = {
    articles: data
};

const getters = {
    'articles': state => {
        return state.articles
    }
};

const mutations = {
    'updateTitle': (state, payload) => {
        state.articles[payload.index]['title'] = payload.title
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