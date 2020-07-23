const state = {
    articles: [], //
    loading: false,
    sources: [],
    filterSource:[],
    search: '',
    showSnack: false
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
    },
    'filterSource': state => {
        return state.filterSource
    },
    'showSnack': state => {
        return state.showSnack
    }
};

const mutations = {
    'SET_TITLE': (state, payload) => {
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
        console.log('------', state)
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
    },
    'SET_SNACKBAR': (state, payload) => {
        state.showSnack = payload;
    }   
};

const actions = {
   updateTitleAction ({ commit }, payload) {
        commit('SET_TITLE', payload)
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