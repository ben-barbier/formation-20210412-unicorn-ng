import { Component } from '@angular/core';
import { UnicornsDispatchers } from '../../store/dispatchers/unicorns.dispatchers';
import { UnicornsSelectors } from '../../store/selectors/unicorns.selectors';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns$ = this.unicornsSelectors.unicorns$;

    constructor(unicornsDispatchers: UnicornsDispatchers, private unicornsSelectors: UnicornsSelectors) {
        unicornsDispatchers.getUnicorns();
    }
}
