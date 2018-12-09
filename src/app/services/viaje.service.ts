import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { viajeInterface } from '../models/viajeInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  viajesCollection: AngularFirestoreCollection<viajeInterface>;
  viajes: Observable<viajeInterface[]>;
  viajeDoc: AngularFirestoreDocument<viajeInterface>;

  constructor(public afs: AngularFirestore) {
    // this.viajes = afs.collection('viajes').valueChanges();
    this.viajesCollection = afs.collection<viajeInterface>('viajes');
    this.viajes = this.viajesCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as viajeInterface;
        const id = a.payload.doc.id;
        return { id , ...data};
      }))
    );
   }
   getViajes() {
     return this.viajes;
   }
   addViaje(viaje: viajeInterface) {
     console.log('nuevo viaje');
     this.viajesCollection.add(viaje);
   }
   deleteViaje(viaje: viajeInterface) {
     this.viajeDoc = this.afs.doc(`viajes/${viaje.id}`);
     this.viajeDoc.delete();
   }
   updateViaje(viaje: viajeInterface) {
     // console.log('Update viaje');
     this.viajeDoc = this.afs.doc(`viajes/${viaje.id}`);
     this.viajeDoc.update(viaje);
   }
}
