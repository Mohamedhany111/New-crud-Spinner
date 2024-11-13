import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'names',
  standalone: true,
})
export class NamesPipe implements PipeTransform {
allData!:string
  transform(value:string[] ):string[] {
  const allData  = value.map((value,index)=>`${value}-${index}`)
  console.log(allData);
    return allData;
  }
}
