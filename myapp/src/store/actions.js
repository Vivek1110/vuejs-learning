import Vue from 'vue';

export const loadData = ({commit}, payload) => {
    let url = ''
    if(payload==='') {
        url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e'
    } else {
       url = `https://newsapi.org/v2/top-headlines?q=${payload}&apiKey=099148be22804e849a0c6fe022b7cf5e`
    }
    commit('SET_LOADING', true);
    Vue.http.get(url)
        .then(response => response.json())
        .then(data => {
            if (data) {
                commit('SET_ARTICLE', data.articles);
                commit('SET_LOADING', false);
            }
        }).catch(err => {
            console.log("this is the error", err);
        });
};