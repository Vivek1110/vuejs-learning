import Vue from 'vue';

const API_URL = 'https://newsapi.org/v2';

export const loadData = ({ commit, state }, payload) => {
  if (state.articles.filterSource.length !== 0) {
    commit('SET_SNACKBAR', true);
  } else {
    commit('SET_SNACKBAR', false);
  }
  let url = '';
  if (payload === '') {
    url = `${API_URL}/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e`;
  } else {
    url = `${API_URL}/top-headlines?q=${payload}&apiKey=099148be22804e849a0c6fe022b7cf5e`;
  }
  commit('SET_LOADING', true);
  Vue.http.get(url)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        commit('SET_ARTICLE', data.articles);
        commit('SET_LOADING', false);
      }
    }).catch((err) => {
      alert(err.body.message);
      commit('SET_LOADING', false);
    });
};

export const loadSources = ({ commit }) => {
  commit('SET_LOADING', true);
  Vue.http.get(`${API_URL}/sources?apiKey=099148be22804e849a0c6fe022b7cf5e`)
    .then((response) => response.json())
    .then((data) => {
      const sources = data.sources.map((source) => source.name);
      if (data) {
        commit('SET_SOURCE', sources);
        commit('SET_LOADING', false);
      }
    }).catch((err) => {
      alert(err.body.message);
      commit('SET_LOADING', false);
    });
};
