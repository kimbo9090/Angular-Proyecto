import { Component, OnInit } from '@angular/core';
import { viajeInterface } from '../../models/viajeInterface';
import { ViajeService } from '../../services/viaje.service';
@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {

  constructor(private viajeService: ViajeService) { }
  viajes: viajeInterface[];
  editState: boolean = false;
  viajeToEdit: viajeInterface;
  ngOnInit() {
    this.viajeService.getViajes().subscribe(viajes => {
      this.viajes = viajes;
    });
  }
  editViaje(event, viaje: viajeInterface) {

    this.editState = true;
    this.viajeToEdit = viaje;

  }
  updateViaje(viaje: viajeInterface) {
    this.viajeService.updateViaje(viaje);
    this.clearState();
  }
  clearState() {
    this.editState = false;
    this.viajeToEdit = null;
  }
  deleteViaje(event, viaje:viajeInterface) {
    this.viajeService.deleteViaje(viaje);
    this.clearState();
  }

}
