import App from '@/App.vue';

describe('app tests', () => {
  it('does not have a created hook', () => {
    expect(typeof App.created).toBe('undefined');
  })
})
