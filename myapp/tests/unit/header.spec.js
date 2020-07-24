import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Header from '../../src/components/header/Header.vue';

describe('Heading', () => {
  it('sets the app headline', () => {
    const msg = 'Headline';
    const wrapper = shallowMount(Header, {
    });
    expect(wrapper.find('h2').text()).to.include(msg);
  });
});
