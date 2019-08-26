import App from '@/App.vue';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import routes from '@/routes.js';

import Home from '@/components/page/Home.vue';
import About from '@/components/page/About.vue';
import Photo from '@/components/page/Photo.vue';
import Code from '@/components/page/Code.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('app tests', () => {
  it('does not have a created hook', () => {
    expect(typeof App.created).toBe('undefined');
  })

  it('route to home', () => {
    const router = new VueRouter({ routes });

    const wrapper = mount(App, {
      localVue,
      router,
      attachToDocument: true
    });

    router.push('/');
    expect(wrapper.find(Home).exists()).toBe(true);
    expect(wrapper.find(About).exists()).toBe(false);
    expect(wrapper.find(Photo).exists()).toBe(false);
    expect(wrapper.find(Code).exists()).toBe(false);
  })

  it('route to about', () => {
    const router = new VueRouter({ routes });

    const wrapper = mount(App, {
      localVue,
      router,
      attachToDocument: true
    });

    router.push('/about');
    expect(wrapper.find(Home).exists()).toBe(false);
    expect(wrapper.find(About).exists()).toBe(true);
    expect(wrapper.find(Photo).exists()).toBe(false);
    expect(wrapper.find(Code).exists()).toBe(false);
  })  

  it('route to photo', () => {
    const router = new VueRouter({ routes });

    const wrapper = mount(App, {
      localVue,
      router,
      attachToDocument: true
    });

    router.push('/photo');
    expect(wrapper.find(Home).exists()).toBe(false);
    expect(wrapper.find(About).exists()).toBe(false);
    expect(wrapper.find(Photo).exists()).toBe(true);
    expect(wrapper.find(Code).exists()).toBe(false);
  }) 

  it('route to code', () => {
    const router = new VueRouter({ routes });

    const wrapper = mount(App, {
      localVue,
      router,
      attachToDocument: true
    });

    router.push('/code');
    expect(wrapper.find(Home).exists()).toBe(false);
    expect(wrapper.find(About).exists()).toBe(false);
    expect(wrapper.find(Photo).exists()).toBe(false);
    expect(wrapper.find(Code).exists()).toBe(true);
  }) 
})
