
import { ErrorHandler, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Injectable({
    'providedIn': 'root',
})

export class ErroGlobais implements ErrorHandler {
    constructor(private _alert: AlertController){        
    }

    handleError(error: any): void {
        
      // console.log(error);

      if(error instanceof Error){
          let er: Error = error;
          // this.mostrarErro(er.message);
          this.showError(er.message);
      }

    }
    async showError(texto: string) {
      const alert = await this._alert.create({
        cssClass: 'my-custom-class',
        header: 'Atenção', 
        subHeader: 'entrada invalida',
        message: texto,
        buttons: ['OK']
      });

      await alert.present();
    }

    
    
    async mostrarErro(msg: string) {
    const alert = await this._alert.create({
      cssClass: 'alert-padrao',
      header: 'Atenção',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}