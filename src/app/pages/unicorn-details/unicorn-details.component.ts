import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UnicornsService } from '../../shared/services/unicorns.service';

@UntilDestroy()
@Component({
    selector: 'app-unicorn-details',
    templateUrl: './unicorn-details.component.html',
    styleUrls: ['./unicorn-details.component.scss'],
})
export class UnicornDetailsComponent {
    public unicorn$ = this.route.params.pipe(switchMap(params => this.unicornsService.getById(params.id)));
    public time$: Observable<Date>;
    public time: Date | undefined;

    constructor(private route: ActivatedRoute, private unicornsService: UnicornsService) {
        this.time$ = interval(1000).pipe(
            tap(i => console.log(i)),
            map(() => new Date()),
            untilDestroyed(this),
        );

        this.time$.subscribe(time => (this.time = time));
    }
}
