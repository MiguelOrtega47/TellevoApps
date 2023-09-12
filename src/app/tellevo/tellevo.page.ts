import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tellevo',
  templateUrl: './tellevo.page.html',
  styleUrls: ['./tellevo.page.scss'],
})
export class TellevoPage implements OnInit {

  nombreUsuario = localStorage.getItem('usuario')

  constructor() { }

  ngOnInit() {
  }

}
