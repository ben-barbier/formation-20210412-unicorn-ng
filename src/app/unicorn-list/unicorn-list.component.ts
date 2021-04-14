import { Component } from '@angular/core';
import { Unicorn, UnicornWithCapacitiesLabels } from '../shared/models/unicorn.model';
import { UnicornsService } from '../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent {
    public unicorns: UnicornWithCapacitiesLabels[] = [];

    constructor(private unicornsService: UnicornsService) {
        unicornsService.getAllWithCapacitiesLabels().subscribe(unicorns => {
            this.unicorns = unicorns;
        });
    }

    // FIXME: bad practice
    get count(): number {
        console.count('count');
        return this.unicorns.length;
    }

    public removeUnicornFromList(unicornToRemove: Unicorn): void {
        this.unicorns = this.unicorns.filter(unicorn => unicornToRemove.id !== unicorn.id);
    }
}
