import { Injectable, Input } from '@angular/core';
import { ModifierService } from '../modifier.service';
import { ProficiencyService } from '../proficiency.service';

@Injectable({
  providedIn: 'root',
})
export class StrengthService {
  playerClass: string;
  playerBaseStat: number;
  constructor() {}

  pBonus:number = ProficiencyService.setProfiencyBonus();
  proficient:boolean = this.playerClass.classProfiency.strength;
  // ,ProficiencyService.setProfiency(level), this.playerClass.baseStatProficiency.strength
  modifiedStat:number = ModifierService.setModifier(this.playerBaseStat);
  savingThrow:number = ModifierService.setSavingThrow(this.modifiedStat, this.proficient);

  carryingWeight:number = this.playerBaseStat*15;
  liftWeight: number = this.playerBaseStat*30;

  //Movement
  longJump = this.playerBaseStat/2;
  runningLongJump = this.playerBaseStat;
  highJump = (3 + this.modifiedStat)/2;
  runningHighJump = 3 + this.modifiedStat;
}
