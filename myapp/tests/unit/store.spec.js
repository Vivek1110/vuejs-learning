import { expect } from 'chai';
import mutations from '../../src/store/modules/articles';

const post = [{
  source: {
    id: 'cnn',
    name: 'CNN',
  },
  author: 'David Shortell, CNN',
  title: 'Judge in Portland bars federal officers from arresting or using force against journalists and legal observers - CNN',
  description: 'A judge in Portland, Oregon, barred federal law enforcement officers from arresting or using physical force against journalists and legal observers mixed in with the crowds at nightly protests near a complex of government ',
  url: 'https://www.cnn.com/2020/07/23/politics/portland-ruling-federal-officers-stop-arrests/index.html',
  urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/200723064805-03-portland-protest-unrest-0722-super-tease.jpg',
  publishedAt: '2020-07-24T01:38:00Z',
  content: '(CNN)A judge in Portland, Oregon, barred federal law enforcement officers from arresting or using physical force against journalists and legal observers mixed in with the crowds at nightly protests n… [+2874 chars]',
},
{
  source: {
    id: 'fox',
    name: 'FOX',
  },
  author: 'David Shortell, CNN',
  title: 'Judge in Portland bars federal officers from arresting or using force against journalists and legal observers - CNN',
  description: 'A judge in Portland, Oregon, barred federal law enforcement officers from arresting or using physical force against journalists and legal observers mixed in with the crowds at nightly protests near a complex of government ',
  url: 'https://www.cnn.com/2020/07/23/politics/portland-ruling-federal-officers-stop-arrests/index.html',
  urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/200723064805-03-portland-protest-unrest-0722-super-tease.jpg',
  publishedAt: '2020-07-24T01:38:00Z',
  content: '(CNN)A judge in Portland, Oregon, barred federal law enforcement officers from arresting or using physical force against journalists and legal observers mixed in with the crowds at nightly protests n… [+2874 chars]',
}];

describe('SET_ARTICLE', () => {
  it('adds a articles to the state', () => {
    const state = {
      articles: [],
      filterSource: [],
    };
    mutations.mutations.SET_ARTICLE(state, post);
    expect(state.articles).equal(post);
  });
});

describe('SET_TITLE', () => {
  it('sets the tile of specified article', () => {
    const payload = {
      title: 'Updated Title',
      index: 0,
    };
    const state = {
      articles: post,
    };
    mutations.mutations.SET_TITLE(state, payload);
    expect(state.articles[0].title).equal(payload.title);
  });
});

describe('FILTER_ARTICLE', () => {
  it('sets the tile of specified article', () => {
    const payload = ['CNN'];
    const state = {
      articles: post,
      filterSource: [],
    };
    mutations.mutations.FILTER_ARTICLE(state, payload);
    expect(state.articles).eql([post[0]]);
    expect(state.filterSource).equal(payload);
  });
});
