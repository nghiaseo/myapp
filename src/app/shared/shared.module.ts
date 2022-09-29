import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NsInputComponent } from './components/ns-input/ns-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NsInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NsInputComponent
  ]
})
export class SharedModule { }
