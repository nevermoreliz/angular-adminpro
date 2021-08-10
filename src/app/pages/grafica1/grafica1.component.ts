import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {


  public labes1: string[] = ['Pan', 'Tacos', 'Refresco'];
  public data1 :any[] = [10, 30, 40];

  public labes2: string[] = ['data1', 'data2', 'data3'];
  public data2 = [350, 450, 100];

  public labes3: string[] = ['data1', 'data2', 'data3'];
  public data3 = [350, 450, 100];

  public labes4: string[] = ['data1', 'data2', 'data3'];
  public data4 = [350, 450, 100];


}
