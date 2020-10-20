import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyComponent implements OnInit {
  @Input() ponyModel: any;
  public color$: Observable<string>;

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.color$ = this.colorService.getColor();
  }

  public check() {
    console.log('On rafraichit le poney');
  }

  public getPonyImageUrl() {
    return `https://cdn.jsdelivr.net/gh/coderbase-it/angular-cd-pp@master/src/assets/images/pony-${this.ponyModel.color}-running.gif`;
}
}
