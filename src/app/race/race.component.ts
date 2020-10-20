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
    {id: 11, color: 'green'},
    {id: 12, color: 'purple'},
    {id: 13, color: 'orange'},
    {id: 14, color: 'blue'},
    {id: 15, color: 'yellow'},
    {id: 16, color: 'green'},
    {id: 17, color: 'purple'},
    {id: 18, color: 'orange'},
    {id: 19, color: 'blue'},
    {id: 20, color: 'yellow'},
  ];

  public dernier: number;

  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log('On rafraichit la course');
  }

  public randomNumPony(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
