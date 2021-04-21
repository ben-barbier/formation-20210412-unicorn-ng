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

    getUnicorn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UnicornsActions.getUnicorn),
            switchMap(action =>
                this.unicornsService.getById(action.id).pipe(
                    map(unicorn => UnicornsActions.getUnicornSuccess({ unicorn })),
                    catchError(() => of(UnicornsActions.getUnicornError())),
                ),
            ),
        ),
    );

    // updateUnicorn$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(UnicornsActions.updateUnicorn),
    //         switchMap(action =>
    //             this.unicornsService.update(action.unicorn).pipe(
    //                 map(unicorn => UnicornsActions.updateUnicornSuccess({ unicorn })),
    //                 catchError(() => of(UnicornsActions.updateUnicornError())),
    //             ),
    //         ),
    //     ),
    // );

    deleteUnicorn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UnicornsActions.deleteUnicorn),
            switchMap(action =>
                this.unicornsService.delete(action.unicorn).pipe(
                    map(() => UnicornsActions.deleteUnicornSuccess({ unicorn: action.unicorn })),
                    catchError(() => of(UnicornsActions.deleteUnicornError())),
                ),
            ),
        ),
    );
}
