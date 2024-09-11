import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'] // corretto da styleUrl a styleUrls
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}