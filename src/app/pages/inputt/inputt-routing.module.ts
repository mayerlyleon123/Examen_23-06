import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputtPage } from './inputt.page';

const routes: Routes = [
  {
    path: '',
    component: InputtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputtPageRoutingModule {}
