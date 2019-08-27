import { Board } from '@app/models';
import { BoardActions, BoardActionTypes } from '../actions/board.actions';

export interface BoardState {
  board: Board;
  loading: boolean;
}

export const initialState: BoardState = {
  board: undefined,
  loading: false,
};

export function reducer(state = initialState, action: BoardActions): BoardState {
  switch (action.type) {
    case BoardActionTypes.GET_BOARD:
      return {
        ...state,
        loading: true,
      };

    case BoardActionTypes.GET_BOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        board: action.payload,
      };

    default:
      return state;
  }
}
