import { Injectable, Input } from '@angular/core';
import { ProficiencyService } from '../proficiency.service';

@Injectable({
  providedIn: 'root'
})
export class WisdomService {
  @Input() playerClass: string;
  @Input() playerBaseStat: number;
  @Input() skills:boolean[];
  wisdomSkills:string[] = ['animalHandling','insight','medicine','perception','survival']
  constructor() {}

  proficient:boolean = this.playerClass.classProfiency.wisdom;
  pBonus:number = ProficiencyService.setProfiencyBonus();

  modifiedStat:number = ModifierService.setModifier(this.playerBaseStat);
  savingThrow:number = ModifierService.setSavingThrow(this.modifiedStat, this.proficient);
  
  passiveInsight:number = this.proficientSkills(this.skills.insight, this.modifiedStat);
  passivePerception:number = this.proficientSkills(this.skills.insight);

  setSkillScores(wisdomSkills){
    
  }
}
