import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
    declarations: [ChartsComponent],
    imports: [
        CommonModule,
        // TODO: ma grosse librairie de graphiques...
        AdminRoutingModule,
    ],
})
export class AdminModule {}
