import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { HomeComponent } from './components/pages/home/home.component';
import { EventoComponent } from './components/evento/evento.component';
import { ExpedienteComponent } from './components/expediente/expediente.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'expediente', component: ExpedienteComponent},
  { path: 'evento', component: EventoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
