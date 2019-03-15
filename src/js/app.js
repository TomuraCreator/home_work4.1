'use strict';
function showColor(char) {
  if (char[1].health > 50) {
    return 'healthy';
  } else if (char[1].health <= 50 && char[1].health > 15) {
    return 'wounded';
  } else if (char[1].health <= 15 && char[1].health > 0) {
    return 'critical';
  }
}

test('show player HP color', () => {

  const characters = [{ name: 'маг', health: 0 }];
  const expected = '';
  const received = showColor(characters);

  expect(received).toBe(expected);
});
alert(showColor);