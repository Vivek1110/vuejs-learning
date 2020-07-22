const state = {
    articles: [],
    loading: false,
    sources: [],
    filterSource:[],
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
    },
    'sources': state => {
        return state.sources
    }
};

const mutations = {
    'updateTitle': (state, payload) => {
        state.articles[payload.index]['title'] = payload.title
    },
    'SET_ARTICLE': (state, payload) => {
        if(state.filterSource.length == 0) {
            state.articles = payload
        } else {
            let filteredArticle = payload.filter(article => {
                payload.includes(article.source.name);
            })
            state.articles = filteredArticle;
        }
    },
    'SET_LOADING': (state, payload) => {
        state.loading = payload
    },
    'SET_SOURCE': (state, payload) => {
        state.sources = payload
    },
    'SET_SEARCH': (state, payload) => {
        state.search = payload
    },
    'FILTER_ARTICLE': (state, payload) => {
        state.filterSource = payload;
        let filteredArticle = state.articles.filter(article => {
            payload.includes(article.source.name);
        })
        state.articles = filteredArticle;
    }
};

const actions = {
   'updateTitleAction': ({ commit }, payload) => {
        commit('updateTitle', payload)
   },
   updateSearch({commit}, payload) {
       commit('SET_SEARCH', payload)
   },
   fliterArticle({commit}, payload) {
       commit('FILTER_ARTICLE', payload)
   }
};

export default {
    state,
    mutations,
    actions,
    getters
}