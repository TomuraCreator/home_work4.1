
function showColor(char) {
  if (char.health > 50) {
    return 'healthy';
  } if (char.health <= 50 && char.health > 15) {
    return 'wounded';
  } if (char.health <= 15 && char.health > 0) {
    return 'critical';
  }
  return 'неверные данные';
}

export default showColor;
