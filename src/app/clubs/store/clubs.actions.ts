import { Action } from '@ngrx/store';
import { ClubsState, SortState } from './clubs.state';

export const enum ClubsActionType {
  REQUEST_CLUBS = '[CLUBS MODULE] REQUEST_CLUBS',
  RESPOND_CLUBS = '[CLUBS MODULE] RESPOND_CLUBS',
  SORT_CLUBS = '[CLUBS MODULE] SORT_CLUBS'
}

export class RequestClubsAction implements Action {
  readonly type: ClubsActionType = ClubsActionType.REQUEST_CLUBS;
}

export class RespondClubsAction implements Action {
  readonly type: ClubsActionType = ClubsActionType.RESPOND_CLUBS;

  constructor(public payload: { clubs: ClubsState[] }) {}
}

export class SortClubsAction implements Action {
  readonly type: ClubsActionType = ClubsActionType.SORT_CLUBS;

  constructor(public payload: { sort: SortState }) {}
}

export type ClubAction =
  | RequestClubsAction
  | RespondClubsAction
  | SortClubsAction;
