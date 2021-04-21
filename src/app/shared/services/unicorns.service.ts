import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, Observable } from 'rxjs';
import { concatAll, map, mergeMap, reduce, share, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Capacity } from '../models/capacity.model';
import { Unicorn, UnicornWithCapacitiesLabels } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
    providedIn: 'root',
})
export class UnicornsService {
    constructor(private http: HttpClient, private capacitiesService: CapacitiesService) {}

    public getById(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`${environment.apiUrl}/unicorns/${id}`);
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
    }

    public delete(unicorn: Unicorn): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`);
    }

    public update(unicorn: Unicorn): Observable<void> {
        return this.http.put<void>(`${environment.apiUrl}/unicorns/${unicorn.id}`, unicorn);
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

    public getAllWithCapacitiesLabels2(): Observable<UnicornWithCapacitiesLabels[]> {
        return forkJoin([this.getAll(), this.capacitiesService.getAll()]).pipe(
            map(([unicorns, capacities]) =>
                unicorns.map(
                    (u: Unicorn): UnicornWithCapacitiesLabels => ({
                        ...u,
                        capacitiesLabels: u.capacities.map(
                            (c: number): string => capacities.find((c2: Capacity) => c2.id === c)?.label ?? '',
                        ),
                    }),
                ),
            ),
        );
    }

    public getAllWithCapacitiesLabels3(): Observable<UnicornWithCapacitiesLabels[]> {
        const unicorns$ = this.getAll().pipe(share());

        const capacities$ = unicorns$.pipe(
            concatAll(),
            reduce((acc: number[], unicorn) => acc.concat(unicorn.capacities), []),
            map(capacities => [...new Set(capacities)]), // 💡 : remove doublons
            concatAll(),
            mergeMap(capacitiesId => this.capacitiesService.get(capacitiesId)),
            toArray(),
        );

        return forkJoin([unicorns$, capacities$]).pipe(
            map(([unicorns, capacities]) =>
                unicorns.map(
                    (u: Unicorn): UnicornWithCapacitiesLabels => ({
                        ...u,
                        capacitiesLabels: u.capacities.map(
                            (c: number): string => capacities.find((c2: Capacity) => c2.id === c)?.label ?? '',
                        ),
                    }),
                ),
            ),
        );
    }
}
