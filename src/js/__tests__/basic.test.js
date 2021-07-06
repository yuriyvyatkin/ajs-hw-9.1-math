import Daemon from '../Daemon';
import Magician from '../Magician';
import NewFeature from '../NewFeature';

test.each([
  ['Daemon', Daemon],
  ['Magician', Magician],
  ['NewFeature', NewFeature],
])('class "%s" exists', (_, Class) => {
  expect(new Class()).toBeDefined();
});

const daemon = new Daemon();
const magician = new Magician();

test.each([
  ['Daemon', magician],
  ['Magician', daemon],
])('class "%s" has "attack", "stoned" properties and inherits from "NewFeature" class', (_, player) => {
  expect(player.attack).toBeGreaterThan(0);
  expect(player.stoned).toBeFalsy();
  expect(player).toBeInstanceOf(NewFeature);
});

describe.each([
  ['Daemon', magician],
  ['Magician', daemon],
])(
  'class %s has:',
  (_, player) => {
    test('"getStoned" method works', () => {
      expect(player.getStoned()).toBeFalsy();
    });

    test('"setStoned" method works', () => {
      player.setStoned(true);

      expect(player.getStoned()).toBeTruthy();
    });

    test('"getAttack" method works', () => {
      expect(player.getAttack()).toBeGreaterThan(0);
    });

    test('"setAttack" method works', () => {
      player.setAttack(2);

      expect(player.getAttack()).toBe(85);

      player.setAttack(1);
      player.setStoned(false);

      expect(player.getAttack()).toBe(85);

      player.setAttack(11);
      expect(player.getAttack()).toBe(0);

      player.setStoned(10);
      expect(player.getAttack()).toBe(0);
    });
  },
);
