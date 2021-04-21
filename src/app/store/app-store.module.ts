import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { UnicornsEffects } from './effects/unicorns.effects';
import { reducers } from './reducers';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true,
                strictActionWithinNgZone: true,
                strictActionTypeUniqueness: true,
            },
        }),
        EffectsModule.forRoot([UnicornsEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
    ],
})
export class AppStoreModule {}
