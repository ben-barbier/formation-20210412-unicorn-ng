import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageUnicornComponent } from './manage-unicorn/manage-unicorn.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { NavComponent } from './shared/nav/nav.component';
import { AgePipe } from './shared/pipes/age.pipe';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';

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
        ReactiveFormsModule,
    ],
    providers: [...httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
