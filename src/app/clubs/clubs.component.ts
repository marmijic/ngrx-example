import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectClub, selectSortState } from './store/clubs.selector';
import { RequestClubsAction, SortClubsAction } from './store/clubs.actions';
import { Observable } from 'rxjs';
import { ClubsState, SortState } from './store/clubs.state';

@Component({
  selector: 'app-clubs',
  template: `
    <app-table
      [clubs]="clubs$ | async"
      [sortState]="sortState$ | async"
      (doSort)="sort($event)"
    ></app-table>
  `
})
export class ClubsComponent implements OnInit {
  clubs$: Observable<ClubsState[]>;
  sortState$: Observable<SortState>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new RequestClubsAction());

    this.clubs$ = this.store.pipe(select(selectClub));
    this.sortState$ = this.store.pipe(select(selectSortState));
  }

  sort(event): void {
    this.store.dispatch(new SortClubsAction({ sort: event }));
  }
}
