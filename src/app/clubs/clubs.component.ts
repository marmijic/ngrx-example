import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectClub, selectSortState } from './store/clubs.selector';
import { RequestClubsAction, SortClubsAction } from './store/clubs.actions';
import { Observable } from 'rxjs';
import { ClubsState, SortState } from './store/clubs.state';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html'
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
    this.store.dispatch(new SortClubsAction({ order: event }));
  }
}
