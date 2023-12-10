import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './pages/login/login.module';
import {PrimengModule} from './shared/primeng.module';
import {ChartModule} from "primeng/chart";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ChartModule,
        LoginModule,
        PrimengModule,
    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule {
}
