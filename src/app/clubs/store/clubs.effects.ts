import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ClubsService } from '../clubs.service';
import {
  RequestClubsAction,
  ClubsActionType,
  RespondClubsAction
} from './clubs.actions';
import { ClubsState } from './clubs.state';

@Injectable()
export class ClubsEffects {
  @Effect()
  requestClubs$: Observable<Action> = this.actions$.pipe(
    ofType<RequestClubsAction>(ClubsActionType.REQUEST_CLUBS),
    switchMap(action => {
      return this.clubService.getClubs().pipe(
        map((response: ClubsState[]) => {
          return new RespondClubsAction({ clubs: response });
        })
      );
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly clubService: ClubsService
  ) {}
}
