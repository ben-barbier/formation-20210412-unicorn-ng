import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
    selector: 'app-unicorn-details',
    templateUrl: './unicorn-details.component.html',
    styleUrls: ['./unicorn-details.component.scss'],
})
export class UnicornDetailsComponent {
    public unicorn$ = this.route.params.pipe(switchMap(params => this.unicornsService.getById(params.id)));

    constructor(private route: ActivatedRoute, private unicornsService: UnicornsService) {}
}
