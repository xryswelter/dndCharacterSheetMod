import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  setStatProficiencyModifier(
    skillProficiencies: PLAYER_SKILL_PROFICIENCY,
    level: number
  ): PLAYER_SKILL_PROFICIENCY_VALUE {
    this.setStatProficiencies = Object.values(skillProficiencies).forEach(
      (element) => {
        element.value = this.returnValueOfStat(
          element[0],
          element[1],
          this.pBonus
        );
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
}
