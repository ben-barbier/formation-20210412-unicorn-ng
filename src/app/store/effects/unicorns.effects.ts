import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UnicornsService } from '../../shared/services/unicorns.service';
import * as UnicornsActions from '../actions/unicorns.actions';

@Injectable()
export class UnicornsEffects {
    constructor(private actions$: Actions, private unicornsService: UnicornsService) {}

    getUnicorns$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UnicornsActions.getUnicorns),
            switchMap(action =>
                this.unicornsService.getAll().pipe(
                    map(unicorns => UnicornsActions.getUnicornsSuccess({ unicorns })),
                    catchError(() => of(UnicornsActions.getUnicornsError())),
                ),
            ),
        ),
    );

    // updateUnicorn$ = ...
    // deleteUnicorn$ = ...
}
