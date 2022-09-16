interface characterStats {
  coreStats: {
    name: string;
    class: string;
    level: number;
    alignment: string;
  };
  baseStats: {
    strength: number;
    dexerity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  savingThrows: {
    strength: { proficient?: boolean; savingValue: number };
    dexerity: { proficient?: boolean; savingValue: number };
    constitution: { proficient?: boolean; savingValue: number };
    intelligence: { proficient?: boolean; savingValue: number };
    wisdom: { proficient?: boolean; savingValue: number };
    charisma: { proficient?: boolean; savingValue: number };
  };
  battleStats: {
    currentHP: number;
    maxHP: number;
    temporaryHP: number;
    armorClass: number;
    generalDifficultClass: number;
    abnormalStatus: {
      blind: boolean;
      charmed: boolean;
      deafened: boolean;
      frightened: boolean;
      grappled: boolean;
      incapacitated: boolean;
      invisible: boolean;
      paralyzed: boolean;
      petrified: boolean;
      poisoned: boolean;
      prone: boolean;
      restrained: boolean;
      stunned: boolean;
      unconscious: boolean;
      exhausted: {
        1: boolean;
        2: boolean;
        3: boolean;
        4: boolean;
        5: boolean;
        6: boolean;
      };
    };
    speed:{
        runSpeed:number
    }
  };
}
