import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, search: any): any {

    if (!value) {
      return [];
    }

    if (!search) {
      return value
    }


    let filter = value.filter((e: any) => e.EstablishmentID.toLowerCase().startsWith(search.toLowerCase()))
    return filter
  }

}
