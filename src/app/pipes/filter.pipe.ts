import { Pipe, PipeTransform } from '@angular/core';
import { Partners } from '../interfaces/partners';
import { Users } from '../interfaces/users';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: Array<Partners>, busqueda:string): Array<Partners> {
    const result:Array<Partners> = [];
    for(const post of data){
      if((post.name.toLocaleLowerCase().includes(busqueda.toLowerCase())) || (post.name.toUpperCase().includes(busqueda.toUpperCase()))){
         result.push(post);
      };
    };
    return result;
  }

}
