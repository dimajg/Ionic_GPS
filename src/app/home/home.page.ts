import { Component } from '@angular/core';
//importamos la libreria de geolocalizacion (captura cordenadas)
import { Geolocation } from '@capacitor/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //declaramos las variables 
  latitud:number = 0;
  longitud:number = 0;


  constructor() {}
//se crea una funcion asincontrana 
  async obtenerCoordenadas() {
    //declara una constante 
    const obtenerCoordenada=await Geolocation.getCurentPosition();//nos permite obetener cordenadas
    this.latitud=obtenerCoordenada.coords.latitude;
    this.longitud=obtenerCoordenada.coords.longitude;
  }


}
