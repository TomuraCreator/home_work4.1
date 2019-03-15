import {showColor} from '../src/js/app.js';

test('should add two numbers', () => {
  const characters = { name: 'маг', health: 40 };
  const received = 'wounded';
  const expected = showColor(characters);
  expect(received).toBe(expected);
});
