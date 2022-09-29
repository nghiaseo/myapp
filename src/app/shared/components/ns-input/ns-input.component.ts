import { Component, forwardRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ns-input',
  templateUrl: './ns-input.component.html',
  styleUrls: ['./ns-input.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>NsInputComponent),
      multi:true
    }
  ]
})
export class NsInputComponent implements OnInit,ControlValueAccessor {

_value:any
@Input() type:string = 'text';
@Input() placeholder:string = 'type something'
@Input() name:string = ''
@Input() icon:string = ''
@Input() label:string = 'default label'
@Input() value:string = 'default value'
@Input() required = false
  constructor() { }
  writeValue(obj: any): void {
    if(obj !== undefined){
      this.nsinput = obj
    }
  }
  registerOnChange(fn: any): void {
   this.propagateChange = fn
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
   // throw new Error('Method not implemented.');
  }
  propagateChange = (_: any) => { };
  propagateTouched = (_: any) => { };

  ngOnInit(): void {
    console.log(this.type)
  }
  get nsinput(){
    return this._value
  }
  set nsinput(val:any){
    this._value = val
    this.propagateChange(this._value)
  }
  touched(e:any){
    this.propagateTouched(e)
  }

  @HostListener('keyup')keyupEvent(){
  //  console.log(this.nsinput.invalid)
  }

}
