import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/categories';
import { Data, MenuItem } from '../models/products';
import { Query } from '../models/query';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {
  private filterSource = new BehaviorSubject<Query | null>(null);
  currentFilter = this.filterSource.asObservable();

  constructor(
    injector: Injector
  ) {
    super(injector)
   }

   getAll (
     category: string | null = null,
     query: string | null = null) : Observable<Data[]> {
    return this.get()
    .pipe(
      map(
        (data: Category[]) => {
          return data.map((x: Category)=> {
            return {
              ...x,
              menuItems: x.menuItems.map((menu: MenuItem)=> {
                return {
                  ...menu,
                  category_name: menu.subItems[0].category_name,
                  price: menu.subItems[0].price
                }
              })
            }
          }).filter(
            c => category && category !== 'All' ? category === c.name : c
          ).map((c: Category) => {
            return {
              categoryName: c.name,
              products: query? c.menuItems.filter(p => p.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : c.menuItems
            } as Data
          }).filter(x => x.products.length)
        }
      )
    )
    ;
   }

   getCategories() : Observable<string[]>{
    return this.get().pipe(
       map((data: Category[]) => {
         const mapping = data.map(x => x.name)
         mapping.unshift('All')
        return mapping
       })
     )
   }

   changeQueries(category?: string, query?: string) {
    if(category || query)
    this.filterSource.next({category, query})
  }
}
