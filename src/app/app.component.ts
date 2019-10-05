import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

export enum DivAnimationStates {
  Normal = 'normal',
  Highlighted = 'highlighted'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state(
        DivAnimationStates.Normal,
        style({
          'background-color': 'red',
          transform: 'translateX(0)'
        })
      ),
      state(
        DivAnimationStates.Highlighted,
        style({
          'background-color': 'blue',
          transform: 'translateX(100px)'
        })
      )
    ])
  ]
})
export class AppComponent {
  state = DivAnimationStates.Normal;
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item: string) {
    const itemIndex = this.list.indexOf(item);
    this.list.splice(itemIndex, 1);
  }
}
