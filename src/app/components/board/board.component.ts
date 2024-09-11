import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'] // Corretto da styleUrl a styleUrls
})
export class BoardComponent implements OnInit {
  squares: any[] = [];
  xIsNext: boolean = true;
  winner: string | null = null;
  // Winner può essere null o una stringa
 
  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "",
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O'; // Corretto '0' a 'O'
  }



  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares[idx] = this.player;  // Cambiato da splice a assegnazione diretta
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(): string | null { // Aggiunto il tipo di ritorno string | null
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }
}
 