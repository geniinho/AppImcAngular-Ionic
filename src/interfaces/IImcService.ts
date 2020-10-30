import { Imc } from 'src/models/Imc';

export interface IImcService {
  
  calcularImc(calcIMC: Imc): number;

}