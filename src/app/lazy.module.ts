import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component'; 

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: LazyParentComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LazyParentComponent
  ]
})
export class LazyModule { }
