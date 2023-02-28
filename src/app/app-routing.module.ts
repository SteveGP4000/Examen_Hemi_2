import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './componentes/form/form.component';
import { ListarComponent } from './componentes/listar/listar.component';

const routes: Routes = [
  {path: 'form', component:FormComponent},
  {path: 'listar', component:ListarComponent},
  {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
