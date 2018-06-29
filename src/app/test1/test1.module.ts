import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Test1 } from './test1';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Test1 }]),
  ],
  declarations: [Test1],
  exports: [Test1],
})
export class Test1Module {}