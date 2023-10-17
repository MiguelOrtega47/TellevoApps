import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-tellevo',
  templateUrl: './tellevo.page.html',
  styleUrls: ['./tellevo.page.scss'],
})
export class TellevoPage implements OnInit {

  nombreUsuario = localStorage.getItem('nombreUsuario');

  constructor(public router: Router, private menu: MenuController) { }


  ngOnInit() {}

  abrirMapa() {
    this.router.navigate(["/mapa"]);
    this.menu.close();
  }
}
