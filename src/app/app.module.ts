import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { QuienesComponent } from './components/home/children/quienes/quienes.component';
import { MisionComponent } from './components/home/children/mision/mision.component';
import { VisionComponent } from './components/home/children/vision/vision.component';
import { AuditoriaComponent } from './components/servicios/children/auditoria/auditoria.component';
import { ContableComponent } from './components/servicios/children/contable/contable.component';
import { FinanciamientoComponent } from './components/servicios/children/financiamiento/financiamiento.component';
import { CreditoComponent } from './components/servicios/children/credito/credito.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiciosComponent,
    BlogComponent,
    QuienesComponent,
    MisionComponent,
    VisionComponent,
    AuditoriaComponent,
    ContableComponent,
    FinanciamientoComponent,
    CreditoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
