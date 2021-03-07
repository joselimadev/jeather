import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';

import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors';

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  searchControl: FormControl;
  text: string;
  cityWeather: CityWeather;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;
  private unsub$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);
    this.store
      .pipe(
        select(fromHomeSelectors.selectCurretWeather),
        takeUntil(this.unsub$)
      )
      .subscribe((value) => (this.cityWeather = value));
    this.loading$ = this.store.pipe(
      select(fromHomeSelectors.selectCurretWeatherLoading)
    );
    this.error$ = this.store.pipe(
      select(fromHomeSelectors.selectCurretWeatherError)
    );
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.unsubscribe();
  }

  doSearch() {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
  }

  handleToogleBookmark() {
    const bookmark = new Bookmark();
  }
}
