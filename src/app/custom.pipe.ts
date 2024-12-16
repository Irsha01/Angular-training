import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(name :string , gender :string): string {

    if(gender == 'F' || gender =='f') return 'Mrs. '+name;
    else if(gender == 'M' || gender =='m') return 'Mr. '+name;
   
    else 
    return name;
  }

}
