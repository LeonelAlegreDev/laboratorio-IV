import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  title = 'Calculadora';
  numero1: number = 0;
  numero2: number = 0;

  sumar(n1: number, n2: number): number {
    return n1 + n2;
  }

  restart(n1: number, n2: number): number {
    return n1 - n2;
  }

  multiplicar(n1: number, n2: number): number {
    return n1 * n2;
  }

  dividir(n1: number, n2: number): number {
    return n1 / n2;
  }

}
