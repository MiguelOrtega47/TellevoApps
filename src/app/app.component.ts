import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ingreso de usuario', url: '/inicio', icon: 'home' },
    { title: 'restablecer-contrasena', url: 'restablecer-contrasena', icon: 'lock-closed' },
    { title: 'Registro', url: '/registro', icon: 'person-add' },
    { title: 'Servicios', url: '/servicios', icon: 'nutrition' },
    { title: 'viajes', url: '/viajes', icon: 'nutrition' },
    { title: 'registro-ruta', url: '/registro-ruta', icon: 'nutrition' },
  ];

  constructor(public router: Router, private menu: MenuController) {}

  compartirApp(){
    Share.share({
      title: 'Compartir myApp',
      url: 'https://bilbaolabs.cl/',
      dialogTitle: 'Disfruta y comparte',
    });
}
cerrarSesion(){
  localStorage.removeItem('autenticado');
  this.router.navigate(["/inicio"]);
  this.menu.close();
}
abrirMapa() {
  this.router.navigate(["/mapa"]);
  this.menu.close();
}
}
