import { LayoutModule } from '@angular/cdk/layout';
import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageUnicornComponent } from './manage-unicorn/manage-unicorn.component';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { NavComponent } from './shared/nav/nav.component';
import { AgePipe } from './shared/pipes/age.pipe';
import { AppStoreModule } from './store/app-store.module';

const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true },
    // TODO: ...
];

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        NavComponent,
        AgePipe,
        ManageUnicornComponent,
        UnicornDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json'),
                deps: [HttpClient],
            },
        }),
        AppStoreModule,
    ],
    providers: [
        ...httpInterceptorProviders,
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
        {
            provide: APP_INITIALIZER,
            useFactory: loadTranslations,
            deps: [TranslateService, Injector],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

export function loadTranslations(translate: TranslateService, injector: Injector): any {
    return () =>
        new Promise<any>((resolve: any) => {
            const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
            locationInitialized.then(() => {
                const langToSet = 'fr';
                translate.setDefaultLang('fr');
                translate.use(langToSet).subscribe(
                    () => console.log(`Successfully initialized '${langToSet}' language.`),
                    () => console.error(`Problem with '${langToSet}' language initialization.`),
                    () => resolve(),
                );
            });
        });
}
