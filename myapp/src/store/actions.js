import Vue from 'vue';

export const loadData = ({ commit, state }, payload) => {
  if (state.articles.filterSource.length !== 0) {
    commit('SET_SNACKBAR', true);
  } else {
    commit('SET_SNACKBAR', false);
  }
  let url = '';
  if (payload === '') {
    url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b569be5d348140b4a035f71ff2b40c45';
  } else {
    url = `https://newsapi.org/v2/top-headlines?q=${payload}&apiKey=b569be5d348140b4a035f71ff2b40c45`;
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
  Vue.http.get('https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e')
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
