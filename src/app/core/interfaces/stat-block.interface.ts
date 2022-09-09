interface RAW_STAT_BLOCK {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface CLASS_STAT_PROFICIENCY {
  strength: boolean;
  dexterity: boolean;
  constitution: boolean;
  intelligence: boolean;
  wisdom: boolean;
  charisma: boolean;
}

interface PLAYER_SKILL_PROFICIENCY {
  acrobatics: [boolean, 'dexterity'];
  animalHandling: [boolean, 'wisdom'];
  arcana: [boolean, 'intelligence'];
  athletics: [boolean, 'strength'];
  deception: [boolean, 'charisma'];
  history: [boolean, 'intelligence'];
  insight: [boolean, 'wisdom'];
  intimidation: [boolean, 'charisma'];
  investigation: [boolean, 'intelligence'];
  medicine: [boolean, 'wisdom'];
  nature: [boolean, 'intelligence'];
  perception: [boolean, 'wisdom'];
  persuasion: [boolean, 'charisma'];
  religion: [boolean, 'intelligence'];
  slightOfHand: [boolean, 'dexterity'];
  stealth: [boolean, 'dexterity'];
  survival: [boolean, 'wisdom'];
}
interface PLAYER_SKILL_PROFICIENCY_VALUE {
    acrobatics: number;
    animalHandling: number;
    arcana: number;
    athletics: number;
    deception: number;
    history: number;
    insight: number;
    intimidation: number;
    investigation: number;
    medicine: number;
    nature: number;
    perception: number;
    persuasion: number;
    religion: number;
    slightOfHand: number;
    stealth: number;
    survival: number;
  }

export { CLASS_STAT_PROFICIENCY, PLAYER_SKILL_PROFICIENCY, PLAYER_SKILL_PROFICIENCY_VALUE, RAW_STAT_BLOCK };
