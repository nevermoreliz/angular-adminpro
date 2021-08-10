import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // para recibir un valor desde el padre
  @Input('valor') progreso: any = 50;
  @Input() btnClass: string = 'btn-primary';

  // para enviar o emitir al valor del componente hijo
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();



  cambiarValor(valor: any) {

    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor <= 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;
    }

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor: any) {
    console.log(nuevoValor);

    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }

}
