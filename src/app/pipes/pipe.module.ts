import { ShortNumberPipe } from './short-number.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ShortNumberPipe],
  imports: [
    CommonModule
  ],
  exports: [ShortNumberPipe]
})
export class PipeModule { }
