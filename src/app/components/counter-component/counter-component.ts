import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { decrement, increment, reset } from '../../store/counter.actions';

@Component({
  selector: 'app-counter-component',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.scss'
})
export class CounterComponent {
  
  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>
  ) {
    //conecta o count observable ao estado atual do store
    this.count$ = this.store.select('count')
  }

  increment() {
    //DISPARA UMA AÇÃO DE INCREMENT
    this.store.dispatch(increment())
  }

  decrement() {
    //DISPARA UMA AÇÃO DE DECREMENTO
    this.store.dispatch(decrement())
  }

  reset() {
    //DISPARA A AÇÃO DE RESET
    this.store.dispatch(reset())
  }

}
