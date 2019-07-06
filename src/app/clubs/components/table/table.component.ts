import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClubsState, SortState, SortOrder } from '../../store/clubs.state';
import { TableSettings, tableSettings } from './table.settings';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() clubs: ClubsState[];
  @Input() sortState: SortState;
  @Output() doSort = new EventEmitter<SortState>();

  tableSettings: TableSettings[] = tableSettings;

  constructor() {}

  sort(field: string): void {
    const order: string =
      field === this.sortState.field
        ? SortOrder.ASCENDING === this.sortState.order
          ? SortOrder.DESCENDING
          : SortOrder.ASCENDING
        : SortOrder.ASCENDING;

    this.doSort.emit({ field, order });
  }
}
