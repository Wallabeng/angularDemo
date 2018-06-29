import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Test2 } from './test2';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Test2 }]),
  ],
  declarations: [Test2],
  exports: [Test2],
})
export class Test2Module {}