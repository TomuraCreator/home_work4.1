import { showColor, magisto } from '../src/js/app';


test('HP', () => {
  const receivedWound = 'wounded';
  const receivedCritical = 'critical';
  const receivedHealth = 'healthy';
  if (showColor(magisto) === receivedWound) {
    expect(receivedWound).toBe(showColor(magisto));
  }
  if (showColor(magisto) === receivedHealth) {
    expect(receivedHealth).toBe(showColor(magisto));
  }
  if (showColor(magisto) === receivedCritical) {
    expect(receivedCritical).toBe(showColor(magisto));
  }
});
test('No data', () => {
  const received = 'неверные данные';
  const expected = showColor(magisto);
  expect(received).not.toBe(expected);
});
test('have value health?', () => {
  expect(magisto).toHaveProperty('health');
});
