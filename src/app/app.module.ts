import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { metaReducers } from './app.reducer';
import { ClubsModule, mainRoutes } from './clubs/clubs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ClubsModule,
    StoreModule.forRoot(
      {
        routerReducer
      },
      {
        metaReducers
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    RouterModule.forRoot(mainRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
