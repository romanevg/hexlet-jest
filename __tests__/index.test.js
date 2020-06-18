import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
  expect(reverse('friend')).toEqual('dneirf');
});

test('length', () => {
  expect(reverse('hello').length).toEqual(5);
})