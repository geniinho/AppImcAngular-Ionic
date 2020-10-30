import { Component, OnInit } from '@angular/core';
import { Imc } from 'src/models/Imc';
import { ImcService } from 'src/services/ImcService';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
  public imcUser: Imc = new Imc();
  public resultado: string = "0";

  constructor(private _imcService: ImcService) { }

  calculandoImc(){
    this.resultado = this._imcService.calcularImc(this.imcUser).toFixed(2);
  }

  ngOnInit() {
  }


}
