import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    SearchPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
