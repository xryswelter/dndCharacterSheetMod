import { Injectable, Input } from '@angular/core';
import { ProficiencyService } from './proficiency.service';

@Injectable({
  providedIn: 'root',
})
export class ModifierService {
  @Input() level: number;
  constructor() {}

  setModifier(stat: number): number {
    let result = Math.floor((stat - 10) / 2);
    return result;
  }

  setSavingThrow(modStat: number, proficient: boolean): number {
    let pBonus = ProficiencyService.setProfiency(this.level);
    let result = proficient ? Math.ceil(modStat + pBonus) : modStat;
    return result;
  }
}
