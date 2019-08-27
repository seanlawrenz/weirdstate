import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SignalrService } from '@app/app-services/signalr.service';
import { Store, Action } from '@ngrx/store';
import { fromRoot } from '..';
import { BoardActionTypes, GetBoardSuccess } from '../actions';
import { getRouterState } from '../selectors';
import { Observable } from 'rxjs';
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
    withLatestFrom(this.store.select(getRouterState), (action, router) => {
      const {
        state: {
          params: { projectId, boardId },
        },
      } = router;

      return {
        projectId,
        boardId,
      };
    }),
    mergeMap(({ projectId, boardId }) =>
      this.boardService.fetchBoard(projectId, boardId).pipe(
        map((result: SignalRResult) => {
          if (result.isSuccessful) {
            return new GetBoardSuccess(result.item);
          }
        }),
      ),
    ),
  );
}
