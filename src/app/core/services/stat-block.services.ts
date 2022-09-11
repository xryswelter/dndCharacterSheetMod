import { Injectable } from '@angular/core';
import {
  PLAYER_SKILL_PROFICIENCY,
  PLAYER_SKILL_PROFICIENCY_VALUE,
  RAW_STAT_BLOCK,
} from '../interfaces/stat-block.interface';

@Injectable({
  providedIn: 'root',
})
export class statBlockServices {
  statProficiencyModifier: RAW_STAT_BLOCK;
  statModifier: RAW_STAT_BLOCK;
  setStatProficiencies: PLAYER_SKILL_PROFICIENCY_VALUE;
  level: number;
  pBonus: number = this.proficiencyBonus(this.level);

  constructor() {}

  setStatModifiers(rawStats: RAW_STAT_BLOCK): RAW_STAT_BLOCK {
    this.statModifier.strength = Math.ceil((rawStats.strength - 10) / 2);
    this.statModifier.dexterity = Math.ceil((rawStats.dexterity - 10) / 2);
    this.statModifier.constitution = Math.ceil(
      (rawStats.constitution - 10) / 2
    );
    this.statModifier.intelligence = Math.ceil(
      (rawStats.intelligence - 10) / 2
    );
    this.statModifier.wisdom = Math.ceil((rawStats.wisdom - 10) / 2);
    this.statModifier.charisma = Math.ceil((rawStats.charisma - 10) / 2);

    return this.statModifier;
  }

  setStatProficiencyModifier(
    skillProficiencies: PLAYER_SKILL_PROFICIENCY,
    level: number
  ): PLAYER_SKILL_PROFICIENCY_VALUE {

    this.setStatProficiencies = Object.values(skillProficiencies).forEach(
      (element) => {
        element.value = this.returnValueOfStat(element[0], element[1], this.pBonus);
      }
    );

    return this.setStatProficiencies;
  }

  returnValueOfStat(
    skillProficiency: boolean,
    baseStat: string,
    pBonus: number
  ): number {
    let result: number = 0;

    switch (baseStat) {
      case 'strength':
        result = skillProficiency
          ? this.statModifier.strength + pBonus
          : this.statModifier.strength;
        break;

      case 'dexterity':
        result = skillProficiency
          ? this.statModifier.dexterity + pBonus
          : this.statModifier.dexterity;
        break;

      case 'constitution':
        result = skillProficiency
          ? this.statModifier.constitution + pBonus
          : this.statModifier.constitution;
        break;

      case 'intelligence':
        result = skillProficiency
          ? this.statModifier.intelligence + pBonus
          : this.statModifier.intelligence;
        break;

      case 'wisdom':
        result = skillProficiency
          ? this.statModifier.wisdom + pBonus
          : this.statModifier.wisdom;
        break;

      case 'charisma':
        result = skillProficiency
          ? this.statModifier.charisma + pBonus
          : this.statModifier.charisma;
        break;
    }

    return result;
  }

  proficiencyBonus(level: number) {
    return 1 + Math.ceil(level / 4);
  }

  setIniative(statModifier:RAW_STAT_BLOCK): number{
    let iniative = statModifier.dexterity  + this.pBonus;
    return iniative;
  }
}
