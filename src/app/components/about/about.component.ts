import { Component, OnInit } from '@angular/core';
import { UsuarioContactar } from 'src/app/models/interfaces/usuario-contactar';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public usuarioContacta : UsuarioContactar

  constructor() { 
    this.usuarioContacta= new  UsuarioContactar("","","",0,)

  }

  ngOnInit(): void {
  }

  registroUsuarioContactar(){
   console.log(this.usuarioContacta)

  }

}
