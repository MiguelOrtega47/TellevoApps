import { Component } from '@angular/core';
import { Share } from '@capacitor/share';


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
    { title: 'folder', url: '/folder', icon: 'home' },
    { title: 'Servicios', url: '/servicios', icon: 'nutrition' },
    { title: 'viajes', url: '/viajes', icon: 'nutrition' },
    { title: 'registro-ruta', url: '/registro-ruta', icon: 'nutrition' },
  ];
  
  constructor() {}

  compartirApp(){
    Share.share({
      title: 'Compartir myApp',
      url: 'https://bilbaolabs.cl/',
      dialogTitle: 'Disfruta y comparte',
    });
}
}
