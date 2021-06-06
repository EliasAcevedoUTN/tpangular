import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  instrumentosFile : any = (data as any).default;

  constructor( ) {
    console.log("servicio cargado con exito!!");
    console.log(this.instrumentosFile);
  }

  public getInstrumentos():any[]{
    return this.instrumentosFile.instrumentos;
  }

  public getInstrumentoxId(id: string):any{
    for (let instrumento of this.instrumentosFile.instrumentos){
      if (instrumento.id == id){
        return instrumento;
      }
    }
  }

  public buscarInstrumento(termino:string):any[]{
    let instrumentoArreglo:any[] = [];
    termino = termino.toLowerCase();
    for (let instrumento of this.instrumentosFile){
      let nombre = instrumento.instrumento.toLowerCase();
      if (nombre.indexOf(termino) >= 0){
        instrumentoArreglo.push(instrumento);
      }
    }
    return instrumentoArreglo;
  }
}
