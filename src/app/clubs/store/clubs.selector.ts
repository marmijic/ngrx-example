import { createFeatureSelector, Selector, createSelector } from '@ngrx/store';
import {
  ClubModuleState,
  clubStateName,
  ClubsState,
  SortState
} from './clubs.state';

const selectClubModule = createFeatureSelector<ClubModuleState>(clubStateName);

export const selectClub: Selector<object, ClubsState[]> = createSelector(
  selectClubModule,
  (state: ClubModuleState) => state.clubs
);

export const selectSortState: Selector<object, SortState> = createSelector(
  selectClubModule,
  (state: ClubModuleState) => state.sort
);
