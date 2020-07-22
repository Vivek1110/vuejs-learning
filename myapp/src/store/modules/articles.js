const state = {
    articles: [],
    loading: false,
    sources: [],
    search: ''
};

const getters = {
    'articles': state => {
        return state.articles
    },
    'loading': state => {
        return state.loading
    },
    'search': state => {
        return state.search
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
    },
    'SET_SEARCH': (state, payload) => {
        state.search = payload
    }
};

const actions = {
   'updateTitleAction': ({ commit }, payload) => {
        commit('updateTitle', payload)
   },
   updateSearch({commit}, payload) {
       commit('SET_SEARCH', payload)
   }
};

export default {
    state,
    mutations,
    actions,
    getters
}