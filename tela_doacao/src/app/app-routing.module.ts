import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoacaoComponent } from '../app/pages/doacao/doacao.component';
import { ConfirmacaoComponent } from '../app/pages/confirmacao/confirmacao.component';

const routes: Routes = [
  { path: '', component: DoacaoComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
