import { CLASS_BASICS } from '../interfaces/stat-block.interface';
import {
  FULL_CASTER_SPELL_SLOTS,
  HALF_CASTER_SPELL_SLOTS,
  WARLOCK_SPELL_SLOTS,
} from './caster-spell-slots.constants';

const artificer: CLASS_BASICS = {
  hitDice: 8,
  savingThrows: ['Constitution', 'Intelligence'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: true,
    lightArmor: true,
    shield: true,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: false,
  },
  bonusFeatures: {
    spellCaster: HALF_CASTER_SPELL_SLOTS,
  },
};

const barbarian: CLASS_BASICS = {
  hitDice: 12,
  savingThrows: ['Strength', 'Constitution'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: true,
    lightArmor: true,
    shield: true,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: true,
  },
  bonusFeatures: {
    martialClass: { rage: 2 },
  },
};

const bard: CLASS_BASICS = {
  hitDice: 8,
  savingThrows: ['Dexterity', 'Charisma'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: false,
    lightArmor: true,
    shield: true,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: false,
    extraWeapons: {
      handCrossbow: true,
      longsword: true,
      rapiers: true,
      shortswords: true,
    },
  },
  bonusFeatures: {
    spellCaster: FULL_CASTER_SPELL_SLOTS,
    casterClass: { bardicInspiration: 2 },
  },
};

const cleric: CLASS_BASICS = {
  hitDice: 8,
  savingThrows: ['Wisdom', 'Charisma'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: true,
    lightArmor: true,
    shield: true,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: false,
  },
  bonusFeatures: {
    spellCaster: FULL_CASTER_SPELL_SLOTS,
    casterClass: { divineIntervention: 2, channelDivinity: 0 },
  },
};

const druid: CLASS_BASICS = {
  hitDice: 8,
  savingThrows: ['Intelligence', 'Wisdom'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: true,
    lightArmor: true,
    shield: true,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: false,
    extraWeapons: {
      clubs: true,
      daggers: true,
      darts: true,
      javelins: true,
      maces: true,
      quarterstaffs: true,
      scimitars: true,
      sickles: true,
      slings: true,
      spears: true,
    },
  },
  bonusFeatures: {
    spellCaster: FULL_CASTER_SPELL_SLOTS,
    casterClass: { wildShape: 0 },
  },
};

const fighter: CLASS_BASICS = {
  hitDice: 10,
  savingThrows: ['Strength', 'Constitution'],
  armorProficiency: {
    heavyArmor: true,
    mediumArmor: true,
    lightArmor: true,
    shield: true,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: true,
  },
  bonusFeatures: {
    martialClass: {
      actionSurge: 2,
    },
  },
};
const monk: CLASS_BASICS = {
  hitDice: 8,
  savingThrows: ['Dexterity', 'Wisdom'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: false,
    lightArmor: false,
    shield: false,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: false,
    extraWeapons: {
      shortswords: true,
    },
  },
  bonusFeatures: {
    martialClass: {
      kiPoints: 2,
    },
  },
};

const paladin: CLASS_BASICS = {
  hitDice: 10,
  savingThrows: ['Strength', 'Charisma'],
  armorProficiency: {
    heavyArmor: true,
    mediumArmor: true,
    lightArmor: true,
    shield: true,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: true,
  },
  bonusFeatures: {
    spellCaster: HALF_CASTER_SPELL_SLOTS,
  },
};

const ranger: CLASS_BASICS = {
  hitDice: 10,
  savingThrows: ['Dexterity', 'Wisdom'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: true,
    lightArmor: true,
    shield: true,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: true,
  },
  bonusFeatures: {
    spellCaster: HALF_CASTER_SPELL_SLOTS,
    rangerClass: {
      favoriteEnemies: {},
      enemyLanguages: {},
      favoriteTerrain: {},
    },
  },
};
const rogue: CLASS_BASICS = {
  hitDice: 8,
  savingThrows: ['Deterity', 'Intelligence'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: false,
    lightArmor: true,
    shield: false,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: false,
    extraWeapons: {
      handCrossbow: true,
      longsword: true,
      rapiers: true,
      shortswords: true,
    },
  },
};

const sorcerer: CLASS_BASICS = {
  hitDice: 6,
  savingThrows: ['Constitution', 'Charisma'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: false,
    lightArmor: false,
    shield: false,
  },
  weaponProficiency: {
    simpleWeapons: false,
    martialWeapons: false,
    extraWeapons: {
      daggers: true,
      darts: true,
      slings: true,
      quarterstaffs: true,
      lightCrossBow: true,
    },
  },
  bonusFeatures: {
    casterClass: { sorceryPoints: 0 },
    spellCaster: FULL_CASTER_SPELL_SLOTS,
  },
};

const warlock: CLASS_BASICS = {
  hitDice: 8,
  savingThrows: ['Wisdom', 'Charisma'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: false,
    lightArmor: true,
    shield: false,
  },
  weaponProficiency: {
    simpleWeapons: true,
    martialWeapons: false,
  },
  bonusFeatures: {
    warlockClass: {
      invocationsTaken: {},
      warlockSlots: WARLOCK_SPELL_SLOTS,
    },
  },
};

const wizard: CLASS_BASICS = {
  hitDice: 6,
  savingThrows: ['Intelligence', 'Wisdom'],
  armorProficiency: {
    heavyArmor: false,
    mediumArmor: false,
    lightArmor: false,
    shield: false,
  },
  weaponProficiency: {
    simpleWeapons: false,
    martialWeapons: false,
    extraWeapons: {
      daggers: true,
      darts: true,
      slings: true,
      quarterstaffs: true,
      lightCrossBow: true,
    },
  },
  bonusFeatures: {
    casterClass: { arcaneRecovery: 2 },
    spellCaster: FULL_CASTER_SPELL_SLOTS,
  },
};

export {
  artificer,
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  warlock,
  wizard,
};
