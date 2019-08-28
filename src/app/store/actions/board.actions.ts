import { Action } from '@ngrx/store';
import { Board, Resources } from '../../models';

export enum BoardActionTypes {
  GET_BOARD = '[CARDWALL] GET BOARD',
  GET_BOARD_SUCCESS = '[CARDWALL] GET BOARD SUCCESS',
}

export class GetBoard implements Action {
  readonly type = BoardActionTypes.GET_BOARD;
}

export class GetBoardSuccess implements Action {
  readonly type = BoardActionTypes.GET_BOARD_SUCCESS;
  constructor(public payload: any) {}
}

export type BoardActions = GetBoard | GetBoardSuccess;
