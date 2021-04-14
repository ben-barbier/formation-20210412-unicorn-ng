import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatAll, map, mergeMap, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Unicorn, UnicornWithCapacitiesLabels } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {
    constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {}

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    }

    public getAllWithCapacitiesLabels(): Observable<UnicornWithCapacitiesLabels[]> {
        return this.getAll().pipe(
            concatAll(),
            mergeMap(unicorn =>
                from(unicorn.capacities).pipe(
                    mergeMap(capacitiesId => this.capacitiesService.get(capacitiesId)),
                    map(capacity => capacity.label),
                    toArray(),
                    map(capacitiesLabels => ({ ...unicorn, capacitiesLabels })),
                ),
            ),
            toArray(),
        );
    }
}
