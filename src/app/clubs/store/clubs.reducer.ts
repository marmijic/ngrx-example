import {
  ClubModuleState,
  initialClubModuleState,
  ClubsState,
  SortState,
  SortOrder
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
    case ClubsActionType.REQUEST_CLUBS:
      return oldState;
    case ClubsActionType.RESPOND_CLUBS: {
      const clubs: ClubsState[] = (action as RespondClubsAction).payload.clubs;

      const newState = {
        ...oldState,
        clubs
      };

      return newState;
    }
    case ClubsActionType.SORT_CLUBS: {
      const sorts: SortState = (action as SortClubsAction).payload.order;
      const clubs: ClubsState[] = oldState.clubs.slice().sort((a, b) => {
        const clubA =
          sorts.field !== 'capacity'
            ? a[sorts.field].toUpperCase()
            : a[sorts.field];
        const clubB =
          sorts.field !== 'capacity'
            ? b[sorts.field].toUpperCase()
            : b[sorts.field];

        if (sorts.order === 'ASC') {
          return clubA > clubB ? 1 : clubA < clubB ? -1 : 0;
        } else {
          return clubA < clubB ? 1 : clubA > clubB ? -1 : 0;
        }
      });

      const newState = {
        ...oldState,
        sorts,
        clubs
      };

      return newState;
    }
    default:
      return oldState;
  }
}
