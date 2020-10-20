import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() personne: Personne;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public check() {
    console.log('On rafraichit la vue enfant');
  }

  public reassign() {
    this.changeDetector.detectChanges();
  }

}
