import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornCardComponent } from './unicorn-list/unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './unicorn-list/unicorn-list.component';

@NgModule({
    declarations: [AppComponent, UnicornListComponent, UnicornCardComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
