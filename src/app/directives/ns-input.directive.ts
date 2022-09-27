import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[NsInput]'
})
export class NsInputDirective {

  constructor() { }
  ngOnInit(){
  }
  @HostListener('focusout',['$event.target'])forcusOutEvent(target:any){
    console.log(target)
  }

}
