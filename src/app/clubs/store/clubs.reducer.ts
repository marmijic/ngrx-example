import {
  ClubModuleState,
  initialClubModuleState,
  ClubsState,
  SortState
} from './clubs.state';
import {
  ClubAction,
  ClubsActionType,
  RespondClubsAction,
  SortClubsAction
} from './clubs.actions';

export function clubReducer(
  oldState: ClubModuleState = initialClubModuleState,
  action: ClubAction
): ClubModuleState {
  switch (action.type) {
    case ClubsActionType.RESPOND_CLUBS: {
      const clubs: ClubsState[] = (action as RespondClubsAction).payload.clubs;

      const newState = {
        ...oldState,
        clubs
      };

      return newState;
    }
    case ClubsActionType.SORT_CLUBS: {
      const sort: SortState = (action as SortClubsAction).payload.sort;
      const clubs: ClubsState[] = oldState.clubs.slice().sort((a, b) => {
        const clubA =
          sort.field !== 'capacity'
            ? a[sort.field].toUpperCase()
            : a[sort.field];
        const clubB =
          sort.field !== 'capacity'
            ? b[sort.field].toUpperCase()
            : b[sort.field];

        if (sort.order === 'ASC') {
          return clubA > clubB ? 1 : clubA < clubB ? -1 : 0;
        } else {
          return clubA < clubB ? 1 : clubA > clubB ? -1 : 0;
        }
      });

      const newState = {
        ...oldState,
        sort,
        clubs
      };

      return newState;
    }
    default:
      return oldState;
  }
}
