import { InstrumentoService } from './../../servicios/instrumento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento : any;

  constructor(private instrumentoServicio: InstrumentoService, private activatedRoute : ActivatedRoute) {
    //
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.instrumento = this.instrumentoServicio.getInstrumentoxId(params['id']);
      console.log(this.instrumento);
    })
  }

  ngOnInit(): void {

  }

}
