import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ModifierService {
  setModifier(stat: number): number {
    let result = Math.floor((stat - 10) / 2);
    return result;
  }

}
