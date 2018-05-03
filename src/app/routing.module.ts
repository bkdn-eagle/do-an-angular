import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'quan-an',
    loadChildren: '.\/quan-an\/quan-an.module#QuanAnModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
