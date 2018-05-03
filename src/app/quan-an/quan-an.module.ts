import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuanAnComponent } from './quan-an.component';
import { QuanAnService } from '../services/quan-an.service';

const routes: Routes = [
  {
    path: '',
    component: QuanAnComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    QuanAnComponent,
  ],
  providers: [
    QuanAnService,
  ]
})
export class QuanAnModule { }
