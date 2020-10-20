import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Personne } from './personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public personne: Personne = {
    nom: 'john doe',
    age: 30
  };

  public check() {
    console.log('On rafraichit le parent');
  }

  public reassign() {
    this.personne = {
      nom: this.personne.nom,
      age: this.personne.age
    }
  }
}
