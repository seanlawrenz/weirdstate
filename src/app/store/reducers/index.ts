import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromBoard from './board.reducer';
import { RouterStateUrl } from '../utils/custom-route-serializer';

export interface State {
  board: fromBoard.BoardState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  board: fromBoard.reducer,
  router: routerReducer,
};
