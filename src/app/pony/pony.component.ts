import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyComponent implements OnInit {
  @Input() ponyModel;

  constructor() { }

  ngOnInit(): void {
  }

  public check() {
    console.log('On rafraichit le poney');
  }

  public getPonyImageUrl() {
    return `https://cdn.jsdelivr.net/gh/coderbase-it/angular-cd-pp@master/src/assets/images/pony-${this.ponyModel.color}-running.gif`;
}
}
