import moment from 'moment';

const data = {
  articles: [], //
  loading: false,
  sources: [],
  filterSource: [],
  search: '',
  showSnack: false,
  history: [],
};

const getters = {
  articles: (state) => state.articles,
  loading: (state) => state.loading,
  search: (state) => state.search,
  sources: (state) => state.sources,
  filterSource: (state) => state.filterSource,
  showSnack: (state) => state.showSnack,
  history: (state) => state.history,
};

const mutations = {
  SET_TITLE(state, payload) {
    state.articles[payload.index].title = payload.title;
  },
  SET_ARTICLE(state, payload) {
    if (state.filterSource.length === 0) {
      state.articles = payload;
    } else {
      const filteredArticle = payload.filter(
        (article) => state.filterSource.includes(article.source.name),
      );
      state.articles = filteredArticle;
    }
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  SET_SOURCE(state, payload) {
    state.sources = payload;
  },
  SET_SEARCH(state, payload) {
    state.search = payload;
  },
  FILTER_ARTICLE(state, payload) {
    state.filterSource = payload;
    const filteredArticle = state.articles.filter(
      (article) => payload.includes(article.source.name),
    );
    state.articles = filteredArticle;
  },
  SET_SNACKBAR(state, payload) {
    state.showSnack = payload;
  },
  ADD_HISTORY(state, payload) {
    const visitedArticle = state.articles[payload];
    visitedArticle.visitedTime = moment().format('MM/DD/YYYY hh:mm');
    state.history.unshift(state.articles[payload]);
  },
  CLEAR_HISTORY(state) {
    state.history = [];
  },
};

const actions = {
  updateTitleAction({ commit }, payload) {
    commit('SET_TITLE', payload);
  },
  updateSearch({ commit }, payload) {
    commit('SET_SEARCH', payload);
  },
  fliterArticle({ commit }, payload) {
    commit('FILTER_ARTICLE', payload);
  },
  addHistory({ commit }, payload) {
    commit('ADD_HISTORY', payload);
  },
  setSnackBar({ commit }, payload) {
    commit('SET_SNACKBAR', payload);
  },
  clearHistory({ commit }) {
    commit('CLEAR_HISTORY');
  },
};

export default {
  state: data,
  mutations,
  actions,
  getters,
};
