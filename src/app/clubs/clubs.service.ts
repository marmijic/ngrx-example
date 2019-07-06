import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ClubsState } from './store/clubs.state';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClubsService {
  constructor(private http: HttpClient) {}

  getClubs(): Observable<ClubsState[]> {
    return this.http
      .get<ClubsState[]>('./assets/dummy/clubs.json', {
        observe: 'response'
      })
      .pipe(map(res => res.body['clubs']));
  }
}
