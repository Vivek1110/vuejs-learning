import Vue from 'vue';

export const loadData = ({commit}, payload) => {
    let url = ''
    if(payload==='') {
        url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b569be5d348140b4a035f71ff2b40c45'
    } else {
       url = `https://newsapi.org/v2/top-headlines?q=${payload}&apiKey=b569be5d348140b4a035f71ff2b40c45`
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
            alert(err.body.message);
            commit('SET_LOADING', false);
        });
};