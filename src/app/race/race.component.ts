import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  public ponies: Array<{id: number, color: string}> = [
    {id: 1, color: 'green'},
    {id: 2, color: 'purple'},
    {id: 3, color: 'orange'},
    {id: 4, color: 'blue'},
    {id: 5, color: 'yellow'},
    {id: 6, color: 'green'},
    {id: 7, color: 'purple'},
    {id: 8, color: 'orange'},
    {id: 9, color: 'blue'},
    {id: 10, color: 'yellow'},
  ];

  public dernier: number;
  public colors:Array<string> = ['green', 'purple', 'orange', 'blue', 'yellow'];

  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log('On rafraichit la course');
  }

  public changeColor() {
    const dernier = this.randomNumPony(0, this.ponies.length - 1);
    const p = this.ponies[dernier];
    this.ponies[dernier] = { ...p, color: this.randomColor(0, this.colors.length - 1)};
    this.dernier = dernier;
  }

  public randomColor(min: number, max: number): string {
    return this.colors[Math.floor(Math.random() * (max - min + 1)) + min];
  }

  public randomNumPony(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
