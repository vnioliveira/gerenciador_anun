import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './pages/login/login.module';
import {PrimengModule} from './shared/primeng.module';
import {ChartModule} from "primeng/chart";
import { HomeComponent } from './pages/home/home.component';
import { TableServices } from 'src/services/tables.services';
import { AnuncioComponent } from './pages/home/anuncio/anuncio.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, AnuncioComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ChartModule,
        LoginModule,
        PrimengModule,
    ],
    providers: [
        TableServices
    ],
    bootstrap: [AppComponent],

})
export class AppModule {
}
