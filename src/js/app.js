const magisto = { class: 'маг', health: '' };
function showColor(char) {
  if (char.health > 50) {
    return 'healthy';
  } if (char.health <= 50 && char.health > 15) {
    return 'wounded';
  } if (char.health <= 15 && char.health > 0) {
    return 'critical';
  }
  if (typeof char.health === 'string' || char.health === '') {
    return 'неверные данные';
  }
  return 0;
}
console.info(showColor(magisto));
export { showColor, magisto };
