import {showColor} from '../src/js/app.js';

test('critical HP', () => {
  const characters = { name: 'маг', health: 14 };
  const received = 'critical';
  const expected = showColor(characters);
  expect(received).toBe(expected);
});
test('wounded HP', () => {
  const characters = { name: 'маг', health: 40 };
  const received = 'wounded';
  const expected = showColor(characters);
  expect(received).toBe(expected);
});
test('healthy HP', () => {
  const characters = { name: 'маг', health: 70 };
  const received = 'healthy';
  const expected = showColor(characters);
  expect(received).toBe(expected);
});