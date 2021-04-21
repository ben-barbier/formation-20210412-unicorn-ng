import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { switchMap } from 'rxjs/operators';
import { UnicornsDispatchers } from '../../store/dispatchers/unicorns.dispatchers';
import { UnicornsSelectors } from '../../store/selectors/unicorns.selectors';

@UntilDestroy()
@Component({
    selector: 'app-unicorn-details',
    templateUrl: './unicorn-details.component.html',
    styleUrls: ['./unicorn-details.component.scss'],
})
export class UnicornDetailsComponent {
    public unicorn$ = this.route.params.pipe(switchMap(params => this.unicornsSelectors.unicorn$(+params.id)));

    constructor(
        private readonly route: ActivatedRoute,
        private readonly unicornsSelectors: UnicornsSelectors,
        private readonly unicornsDispatchers: UnicornsDispatchers,
    ) {
        this.route.params.subscribe(params => unicornsDispatchers.getUnicorn(+params.id));
    }
}
