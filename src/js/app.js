const gamer = { name: 'Маг', health: 90 };

export default function getHealth(person) {
  if (person.health >= 50) {
    return 'healthy';
  } if (person.health < 50 && person.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
getHealth(gamer);
