import getHealth from '../app';

test.each([
  [{ name: 'воин', health: 100 }, 100, 'healthy'],
  [{ name: 'воин', health: 50 }, 50, 'healthy'],
  [{ name: 'воин', health: 30 }, 30, 'wounded'],
  [{ name: 'воин', health: 15 }, 15, 'wounded'],
  [{ name: 'воин', health: 7 }, 7, 'critical'],
])(('show health'),
  (gamer, health, expected) => {
    const result = getHealth(gamer);
    expect(result).toBe(expected);
  });
