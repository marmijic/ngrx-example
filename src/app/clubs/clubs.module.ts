import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClubsComponent } from './clubs.component';
import { TableComponent } from './components/table/table.component';
import { StoreModule } from '@ngrx/store';
import { clubReducer } from './store/clubs.reducer';
import { clubStateName } from './store/clubs.state';
import { EffectsModule } from '@ngrx/effects';
import { ClubsEffects } from './store/clubs.effects';
import { Routes, RouterModule } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    component: ClubsComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature(clubStateName, clubReducer),
    EffectsModule.forFeature([ClubsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: ClubsComponent
      }
    ])
  ],
  providers: [],
  declarations: [ClubsComponent, TableComponent],
  entryComponents: [ClubsComponent]
})
export class ClubsModule {}
