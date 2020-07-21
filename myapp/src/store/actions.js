import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e')
        .then(response => response.json())
        .then(data => {
            if (data) {
                commit('SET_ARTICLE', data.articles);
            }
        }).catch(err => {
            console.log("this is the error", err);
        });
};