import { Injectable } from '@angular/core';
import { stat } from 'fs';
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
  class: string;
  armorEquipped: string[];
  armorClass: number = this.setArmorClass(this.statModifier, armorEquipped);

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

  proficiencyBonus(level: number) {
    return 1 + Math.ceil(level / 4);
  }

  setIniative(statModifier: RAW_STAT_BLOCK): number {
    let iniative = statModifier.dexterity + this.pBonus;
    return iniative;
  }

  setArmorClass(statModifier: RAW_STAT_BLOCK, armorEquipped: string[]): number {
    let armor = this.getEquipment(armorEquipped);
    let acValue: number;

    switch (this.class) {
      case 'barbarian':
        acValue = statModifier.dexterity + statModifier.constitution + 10;
        return acValue;
        break;

      case 'monk':
        acValue = statModifier.constitution + statModifier.wisdom + 10;
        return acValue;
        break;

      default:
        acValue = statModifier.dexterity + armor;
        return acValue;
        break;
    }
  }

  getEquipment(armorEquipped:string[]): number{
    
    return results;
  }
}
