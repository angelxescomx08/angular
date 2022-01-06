import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /*
    enviar cosas al padre
    @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

    enviar cosas al hijo
    @Input()
  */

  constructor(private dbzService: DbzService) { }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
