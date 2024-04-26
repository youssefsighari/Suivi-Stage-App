import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeOffresComponent } from './liste-offres/liste-offres.component';
import { LivretStageComponent } from './livret-stage/livret-stage.component';

const routes: Routes = [
  {path:"liste_offres",component:ListeOffresComponent},
  {path:'livret_stage',component : LivretStageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
