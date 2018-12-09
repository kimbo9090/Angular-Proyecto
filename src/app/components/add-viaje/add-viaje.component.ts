import { viajeInterface } from './../../models/viajeInterface';
import { ViajeService } from './../../services/viaje.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-add-viaje',
  templateUrl: './add-viaje.component.html',
  styleUrls: ['./add-viaje.component.css']
})
export class AddViajeComponent implements OnInit {
  viaje: viajeInterface = {
    pais: '',
    ciudad: '',
    hotel: '',
    avion: '',
    fechaSalida: '',
    estrellas: ''
  };
  constructor(private ViajeService: ViajeService) { }

  ngOnInit() {
  }
  onGuardarViaje(myForm: NgForm) {
    const fechaNow = Date.now();
    this.viaje.fechaSalida = fechaNow;
    this.ViajeService.addViaje(this.viaje);
  }

}
