import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SignalrService } from '@app/app-services/signalr.service';
import { Store, Action } from '@ngrx/store';
import { fromRoot } from '..';
import { BoardActionTypes, GetBoardSuccess } from '../actions';
import { getRouterState } from '../selectors';
import { Observable, of } from 'rxjs';
import { withLatestFrom, map, catchError, mergeMap, switchMap } from 'rxjs/operators';
import { BoardService } from '@app/app-services/board.service';
import { SignalRResult } from '@app/models';

@Injectable()
export class BoardEffects {
  constructor(
    private actions$: Actions,
    signalR: SignalrService,
    private store: Store<fromRoot.State>,
    private boardService: BoardService,
  ) {}

  @Effect()
  loadBoard$: Observable<Action> = this.actions$.pipe(
    ofType(BoardActionTypes.GET_BOARD),
    switchMap(
      () =>
        this.boardService.fetchBoard(228684, 90002230).pipe(
          map((result: SignalRResult) => {
            if (result.isSuccessful) {
              return new GetBoardSuccess(result.item);
            }
          }),
        ),
      // this.boardService.fakeFetchBoard().pipe(map(data => new GetBoardSuccess(data))),
      // this.boardService.fetchBoardTest(228684, 9000230).pipe(map(data => new GetBoardSuccess(data))),
    ),
  );
}
