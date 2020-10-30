import { Injectable } from '@angular/core';
import { IImcService } from 'src/interfaces/IImcService';
import { Imc } from 'src/models/Imc';

@Injectable({
  'providedIn': 'root'
})

export class ImcService implements IImcService{
  private calc: number = null;

  calcularImc(calcIMC: Imc): number {
    if(!calcIMC.peso) throw new Error('O campo peso deve ser preenchido.');
    if(!calcIMC.altura) throw new Error('O campo altura deve ser preenchido.');
    this.calc = (calcIMC.peso / Math.pow(calcIMC.altura, 2));
    return this.calc;
  }

}
