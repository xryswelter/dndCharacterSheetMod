interface characterStats {
  coreStats?: {
    name?: string;
    class?: string;
    level?: number;
    alignment?: string;
  };
  baseStats?: {
    strength?: number;
    dexerity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
  };
  savingThrows?: {
    strength?: {
      proficient?: boolean;
      savingValue?: number;
    };
    dexerity?: {
      proficient?: boolean;
      savingValue?: number;
    };
    constitution?: {
      proficient?: boolean;
      savingValue?: number;
    };
    intelligence?: {
      proficient?: boolean;
      savingValue?: number;
    };
    wisdom?: {
      proficient?: boolean;
      savingValue?: number;
    };
    charisma?: {
      proficient?: boolean;
      savingValue?: number;
    };
  };
  battleStats?: {
    currentHP?: number;
    maxHP?: number;
    temporaryHP?: number;
    hitDice?: number;
    armorClass?: number;
    generalDifficultClass?: number;
    abnormalStatus?: {
      blind?: boolean;
      charmed?: boolean;
      deafened?: boolean;
      frightened?: boolean;
      grappled?: boolean;
      incapacitated?: boolean;
      invisible?: boolean;
      paralyzed?: boolean;
      petrified?: boolean;
      poisoned?: boolean;
      prone?: boolean;
      restrained?: boolean;
      stunned?: boolean;
      unconscious?: boolean;
      exhausted?: {
        1?: boolean;
        2?: boolean;
        3?: boolean;
        4?: boolean;
        5?: boolean;
        6?: boolean;
      };
    };
    speed?: {
      runSpeed?: number;
      flySpeed?: number;
      swimSpeed?: Number;
    };
    physicalAbilties?: {
      jump?: {
        long?: number;
        standing?: number;
        high?: number;
      };
      vision?: {
        normalLight?: number;
        lowLight?: number;
        darkLight?: number;
      };
      passives?: {
        insight?: number;
        investigation?: number;
        perception?: number;
      };
    };
    initative?: number;
    resistanceType?: {
      resistance?: {
        acid?: boolean;
        bludgeon?: boolean;
        cold?: boolean;
        traps?: boolean;
        spells?: boolean;
        fire?: boolean;
        force?: boolean;
        lightning?: boolean;
        necrotic?: boolean;
        nonMagical?: boolean;
        piercing?: boolean;
        psychic?: boolean;
        radiant?: boolean;
        ranged?: boolean;
        slashing?: boolean;
        thunder?: boolean;
      };
      immunity?: {
        acid?: boolean;
        blind?: boolean;
        bludgeon?: boolean;
        charmed?: boolean;
        cold?: boolean;
        deafened?: boolean;
        fire?: boolean;
        force?: boolean;
        frightened?: boolean;
        grappled?: boolean;
        incapacitated?: boolean;
        invisible?: boolean;
        lightning?: boolean;
        necrotic?: boolean;
        nonMagical?: boolean;
        paralyzed?: boolean;
        petrified?: boolean;
        piercing?: boolean;
        poisoned?: boolean;
        prone?: boolean;
        psychic?: boolean;
        radiant?: boolean;
        ranged?: boolean;
        restrained?: boolean;
        slashing?: boolean;
        spells?: boolean;
        stunned?: boolean;
        thunder?: boolean;
        traps?: boolean;
        unconscious?: boolean;
      };
      vulnerability?: {
        acid?: boolean;
        bludgeon?: boolean;
        cold?: boolean;
        fire?: boolean;
        force?: boolean;
        lightning?: boolean;
        necrotic?: boolean;
        piercing?: boolean;
        psychic?: boolean;
        radiant?: boolean;
        slashing?: boolean;
        thunder?: boolean;
      };
    };
  };
  languages?: {
    abyssal?: boolean;
    celestial?: boolean;
    common?: boolean;
    deepSpeech?: boolean;
    draconic?: boolean;
    druidic?: boolean;
    elvish?: boolean;
    giant?: boolean;
    gnomish?: boolean;
    goblin?: boolean;
    gnoll?: boolean;
    halfling?: boolean;
    infernal?: boolean;
    orc?: boolean;
    primordial?: {
      aquan?: boolean;
      auran?: boolean;
      ignan?: boolean;
      terran?: boolean;
    };
    sylvan?: boolean;
    undercommon?: boolean;
  };
  tools?: {
    alchemist?: boolean;
    calligraphers?: boolean;
    cartographers?: boolean;
    cook?: boolean;
    forgery?: boolean;
    herbalism?: boolean;
    leather?: boolean;
    navigation?: boolean;
    poisoner?: boolean;
    smith?: boolean;
    tinker?: boolean;
    wood?: boolean;
    brewer?: boolean;
    carpenter?: boolean;
    cobbler?: boolean;
    disguise?: boolean;
    glass?: boolean;
    jewelery?: boolean;
    mason?: boolean;
    painters?: boolean;
    potters?: boolean;
    thieves?: boolean;
    weavers?: boolean;
  };
  features?: {
    class?: CLASS_FEATURES;
    race?: RACE_FEATURES;
    feats?: FEATS;
  };
}
