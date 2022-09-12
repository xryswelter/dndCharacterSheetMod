import { CASTER_INTERFACE} from "./level.interface";

interface MARTIAL_BONUS_CLASS_FEATURES {
  rage?: number;
  kiPoints?: number;
  actionSurge?: number;
}

interface CASTER_BONUS_CLASS_FEATURES {
  arcaneRecovery?: number;
  bardicInspiration?: number;
  channelDivinity?: number;
  divineIntervention?: number;
  sorceryPoints?: number;
  wildShape?: number;
}

interface RANGER_UNIQUE_ABILITIES {
  favoriteEnemies: {
    aberrations?: boolean;
    beasts?: boolean;
    celestials?: boolean;
    constructs?: boolean;
    dragongs?: boolean;
    elementals?: boolean;
    fey?: boolean;
    fiends?: boolean;
    giants?: boolean;
    monstrosities?: boolean;
    oozes?: boolean;
    plants?: boolean;
    undead?: boolean;
  };
  enemyLanguages: {
    common?: boolean;
    dwarvish?: boolean;
    elvish?: boolean;
    giant?: boolean;
    gnomish?: boolean;
    goblin?: boolean;
    halfling?: boolean;
    orc?: boolean;
    abyssal?: boolean;
    celestial?: boolean;
    deepSpeech?: boolean;
    draconic?: boolean;
    infernal?: boolean;
    primordial?: boolean;
    sylvan?: boolean;
    undercommon?: boolean;
  };
  favoriteTerrain: {
    arctic?: boolean;
    coast?: boolean;
    desert?: boolean;
    forest?: boolean;
    grassland?: boolean;
    mountain?: boolean;
    swamp?: boolean;
    undercommon?: boolean;
  };
}

interface WARLOCK_SPELL_FORMAT {
  warlockSlots: CASTER_INTERFACE,
  invocationsTaken: {
    agonizingBlast?: boolean;
    armorOfSHadows?: boolean;
    beastSpeech?: boolean;
    beguilingInfluence?: boolean;
    devilsSight?: boolean;
    eldrichMind?: boolean;
    eldrichSight?: boolean;
    eldrichSpear?: boolean;
    eyesOfTheRuneKeeper?: boolean;
    fiendishVigor?: boolean;
    gazeOfTwoMinds?: boolean;
    graspOfHadar?: boolean;
    lanceOfLethargy?: boolean;
    maskOfManyFaces?: boolean;
    mistyVisions?: boolean;
    repellingBlast?: boolean;
    thiefOfFiveFates?: boolean;
    aspectOfTheMoon?: boolean;
    bookOfAncientSecrets?: boolean;
    giftOfTheEverLivingOnes?: boolean;
    improvedPactWeapon?: boolean;
    investmentOfTheChainMaster?: boolean;
    rebukeOfTheTalisman?: boolean;
    voiceOfTheChainMaster?: boolean;
    cloakOfFlies?: boolean;
    eldrichSmite?: boolean;
    farScribe?: boolean;
    giftOfTheDepth?: boolean;
    maddeningHex?: boolean;
    mireOfTheMind?: boolean;
    oneWithShadows?: boolean;
    signOfIllOmen?: boolean;
    thirstingBlade?: boolean;
    tombOfLevistus?: boolean;
    undyingServitude?: boolean;
    bewitchingWhispers?: boolean;
    dreadfulWord?: boolean;
    ghostlyGaze?: boolean;
    protectionOfTheTalisman?: boolean;
    relentlessHex?: boolean;
    trickstersEscape?: boolean;
    sculptorOfFlesh?: boolean;
    ascendantStep?: boolean;
    giftOfTheProtectors?: boolean;
    minionsOFChaos?: boolean;
    otherworldlyLeap?: boolean;
    whispersOfTheGrave?: boolean;
    bondOfTheTalisman?: boolean;
    lifeDrinker?: boolean;
    chainsofCarceri?: boolean;
    masterOfMyriadForms?: boolean;
    shroudOfShadow?: boolean;
    visionsOfDistantRealms?: boolean;
    witchSight?: boolean;
  };
}

interface EXTRA_FEATURES {
  casterClass?: CASTER_BONUS_CLASS_FEATURES;
  martialClass?: MARTIAL_BONUS_CLASS_FEATURES;
  rangerClass?: RANGER_UNIQUE_ABILITIES;
  warlockClass?: WARLOCK_SPELL_FORMAT;
  spellsKnown?:number,
  spellCaster?: CASTER_INTERFACE, 
}
export { EXTRA_FEATURES };
