import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filerByName'
})
export class FilerByNamePipe implements PipeTransform {


  transform(value: any, searchToken: string): any {


    if (searchToken == null)
      searchToken = "";

    searchToken = searchToken.toLowerCase();

    return value.filter(item => item.name.toLocaleLowerCase().indexOf(searchToken) > -1);
    
  }
}
