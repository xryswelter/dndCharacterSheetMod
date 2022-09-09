import { Injectable } from '@angular/core';
import {
  PLAYER_SKILL_PROFICIENCY,
  RAW_STAT_BLOCK,
} from '../interfaces/stat-block.interface';

@Injectable({
  providedIn: 'root',
})
export class statBlockServices {
  statProficiencyModifier: RAW_STAT_BLOCK;

  constructor() {}

  setStatModifiers(rawStats: RAW_STAT_BLOCK): RAW_STAT_BLOCK {
    let statModifier: RAW_STAT_BLOCK = {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    };

    statModifier.strength = Math.ceil((rawStats.strength - 10) / 2);
    statModifier.dexterity = Math.ceil((rawStats.dexterity - 10) / 2);
    statModifier.constitution = Math.ceil((rawStats.constitution - 10) / 2);
    statModifier.intelligence = Math.ceil((rawStats.intelligence - 10) / 2);
    statModifier.wisdom = Math.ceil((rawStats.wisdom - 10) / 2);
    statModifier.charisma = Math.ceil((rawStats.charisma - 10) / 2);

    return statModifier;
  }

  setStatProficiencyModifier(
    statModifier: RAW_STAT_BLOCK,
    skillProficiencies: PLAYER_SKILL_PROFICIENCY,
    level: number
  ): PLAYER_SKILL_PROFICIENCY_VALUE {
    let pBonus = this.proficiencyBonus(level);

    let results = this.skillProficiencies.forEach((element) => {
      element ? statModifier.element + pBonus : statModifier;
    });

    return results;
  }

  proficiencyBonus(level: number) {
    return 1 + Math.ceil(level / 4);
  }
}
