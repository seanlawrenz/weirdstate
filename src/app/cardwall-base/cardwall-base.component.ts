import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '@app/models';
import { Store, select } from '@ngrx/store';
import { fromRoot, rootActions, rootSelectors } from '@app/store';

@Component({
  selector: 'app-cardwall-base',
  templateUrl: './cardwall-base.component.html',
  styleUrls: ['./cardwall-base.component.scss'],
})
export class CardwallBaseComponent implements OnInit {
  board$: Observable<Board>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new rootActions.GetBoard());
    this.board$ = this.store.pipe(select(rootSelectors.getBoard));
    this.loading$ = this.store.pipe(select(rootSelectors.isCardwallLoading));
  }
}
