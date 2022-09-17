import { Component, Input } from '@angular/core';
import { CHARACTER_STATS } from '../../interfaces/character-stats.interface';
import { ModifierService } from '../../services/modifier.service';
import {
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
} from '../../constants/class-stats.constants';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.scss'],
})
export class StatBlockComponent {
  constructor(private modifierService: ModifierService) {}

  characterStats: CHARACTER_STATS;

  @Input() name: string;
  @Input() characterClass: string[];
  @Input() classLevel: number[];
  @Input() overallLevel: number;
  @Input() strength: number;
  @Input() dexterity: number;
  @Input() constitution: number;
  @Input() intelligence: number;
  @Input() wisdom: number;
  @Input() charisma: number;

  proficiencyBonus: number;

  setStatBlock() {
    let baseStat = this.characterStats.baseStats;
    baseStat.strength = this.strength;
    baseStat.dexterity = this.dexterity;
    baseStat.constitution = this.constitution;
    baseStat.intelligence = this.intelligence;
    baseStat.wisdom = this.wisdom;
    baseStat.charisma = this.charisma;
  }

  setModifiedStats() {
    let baseModifier = this.characterStats.baseModifier;
    baseModifier.strength = this.modifierService.setModifier(this.strength);
    baseModifier.dexterity = this.modifierService.setModifier(this.dexterity);
    baseModifier.constitution = this.modifierService.setModifier(
      this.constitution
    );
    baseModifier.intelligence = this.modifierService.setModifier(
      this.intelligence
    );
    baseModifier.wisdom = this.modifierService.setModifier(this.wisdom);
    baseModifier.charisma = this.modifierService.setModifier(this.charisma);
  }

  setProficiency() {
    this.proficiencyBonus = 1 + Math.ceil(this.overallLevel / 4);
  }

  setSavingThrows() {
    let classString = this.characterClass[0];
    //Pseudocode
    // string = characterClass.savingProficiencies SWITCH?
    // switch if match then proficient = true
    //do for both
  }
}
