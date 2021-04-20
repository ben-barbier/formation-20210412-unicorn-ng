import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';

const routes: Routes = [
    { path: 'unicorns', component: UnicornListComponent },
    { path: 'unicorns/:id', component: UnicornDetailsComponent },
    { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
