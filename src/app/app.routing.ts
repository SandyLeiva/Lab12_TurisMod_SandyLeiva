import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component'; 
import { GaleriaComponent } from './components/galeria/galeria.component'; 
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes =[
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
