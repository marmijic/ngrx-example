export const clubStateName = 'club-module';

export const enum SortOrder {
  ASCENDING = 'ASC',
  DESCENDING = 'DESC'
}

export interface ClubsState {
  id: number;
  name: string;
  short_name: string;
  club_code: string;
  stadium: string;
  capacity: number;
  manager: string;
}

export interface SortState {
  field: string;
  order: string;
}

export interface ClubModuleState {
  clubs: ClubsState[];
  sorts: SortState;
}

export const initialClubModuleState = {
  clubs: null,
  sorts: {
    field: 'name',
    order: SortOrder.ASCENDING
  }
};
