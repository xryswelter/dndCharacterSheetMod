import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProficiencyService {
  
  level:number;
  constructor() { }
   pBonus = this.setProfiencyBonus();

  setProfiencyBonus(): number{
    let result = 1 + Math.ceil(this.level/4);
    return result;
  }

  proficientSkills(skill:boolean, modifier:number){
    let result = (skill)? 8 + modifier + this.pBonus: 8 + modifier
    return result;
  }
}
