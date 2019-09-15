import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rutas padres
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BlogComponent} from './components/blog/blog.component';

//rutas hijas
import { QuienesComponent } from './components/home/children/quienes/quienes.component';
import { MisionComponent } from './components/home/children/mision/mision.component';
import { VisionComponent } from './components/home/children/vision/vision.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'quienes-somos', component: QuienesComponent },
      { path: 'mision', component: MisionComponent },
      { path: 'vision', component: VisionComponent },
    ]
  },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
