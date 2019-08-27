import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBoard from '../reducers/board.reducer';

export const getBoardState = createFeatureSelector<fromBoard.BoardState>('board');

export const getBoard = createSelector(
  getBoardState,
  state => state.board,
);

export const isCardwallLoading = createSelector(
  getBoardState,
  state => state.loading,
);
