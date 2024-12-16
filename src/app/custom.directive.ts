import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ref:ElementRef) { 
    ref.nativeElement.style.background ='skyblue';
    ref.nativeElement.style.fontSize ='24px';
    ref.nativeElement.style.fontWeight ='bold';
  }

}
