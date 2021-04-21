import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { AgeEvenGuard } from './shared/guards/age-even.guard';

const routes: Routes = [
    { path: 'unicorns', component: UnicornListComponent },
    { path: 'unicorns/:id', component: UnicornDetailsComponent, canActivate: [AgeEvenGuard] },
    { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
    { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: environment.production ? PreloadAllModules : NoPreloading,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
