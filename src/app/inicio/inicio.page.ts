import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  /*
  formularioLogin: FormGroup;
  usuario = 'zenpi';
  contrasena = '1234'
  */

  nombreUsuario = localStorage.getItem('usuario')
  contrasenaUsuario = localStorage.getItem('contrasena')

  constructor(private router: Router, private alertController: AlertController) { }


  ngOnInit() {
  }

  async ingresar(){
    localStorage.setItem('usuario','zenpi');
    localStorage.setItem('contrasena','1234');

    /*
    if(this.usuario == usuario && this.contrasena == constrasena){
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Hola',
        buttons: ['OK']
      });

      await alert.present();
      return;      
    }else{
      this.router.navigate(["/tellevo"]);
    }
    */
   
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: 'Hola',
      buttons: ['OK']
    });

    await alert.present();
    return;
  }

}