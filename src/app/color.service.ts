import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  public colors:Array<string> = ['green', 'purple', 'orange', 'blue', 'yellow'];

  constructor() { }

  public randomColor(min: number, max: number): string {
    return this.colors[Math.floor(Math.random() * (max - min + 1)) + min];
  }

  public getColor() {
    return interval(1000).pipe(
      map(() => this.randomColor(0, this.colors.length - 1))
    );
  }

}
