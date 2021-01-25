import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];

  if(!searchText) return items;
  let results = [];
      items.forEach((it: any) => {
        if (it.regNo.includes(searchText.toUpperCase())
         || it.locStr.includes(searchText.toLowerCase()))
         {
          items.filter(res=>{
          if(res.speed.toString().match(searchText.toString())){
            results.push(res);
          }
          })
            results.push(it);
        }
      });
  return results;
   }

}
