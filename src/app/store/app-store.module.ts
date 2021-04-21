import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('entityCache', reducers, { metaReducers }),
        EffectsModule.forFeature([
            // UnicornsEffects
        ]),
    ],
    providers: [
        // CartDispatchers, CartSelectors, UnicornsDispatchers, UnicornsSelectors
    ],
    exports: [StoreModule, EffectsModule],
})
export class AppStoreModule {}
