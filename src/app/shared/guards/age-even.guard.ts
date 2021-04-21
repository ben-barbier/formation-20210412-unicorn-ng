import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UnicornsService } from '../services/unicorns.service';

@Injectable({
    providedIn: 'root',
})
export class AgeEvenGuard implements CanActivate {
    constructor(private unicornsService: UnicornsService, private router: Router, private snackBar: MatSnackBar) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<true | UrlTree> {
        const unicornId = next.params.id;

        return this.unicornsService.getById(unicornId).pipe(
            map(unicorn => unicorn.birthyear % 2),
            tap(even => even && this.snackBar.open(`⚠️ Vous n'avez pas le droit de voir cette page...`)),
            map(even => (even ? this.router.createUrlTree(['/unicorns']) : true)),
        );
    }
}
