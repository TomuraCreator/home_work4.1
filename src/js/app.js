const characters = { name: 'маг', health: 40 };
function showColor(char) {
  if (char.health > 50) {
    return 'healthy';
  } else if (char.health <= 50 && char.health > 15) {
    return 'wounded';
  } else if (char.health <= 15 && char.health > 0) {
    return 'critical';
  }
}

export {showColor};
console.info(showColor(characters));
