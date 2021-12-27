import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  constructor(private _productService : ProductsService) { }

  categorie$: Observable<string[]> = of([])
  selectedCategory = 'All';
  searchInput: string | undefined = undefined;



  ngOnInit(): void {
   this.categorie$ = this._productService.getCategories()
  }

  selectCategory(category: string){
    this.selectedCategory = category;

    this._productService.changeQueries(this.selectedCategory, this.searchInput)
  }

  search(query: any){
    const value = query?.target?.value
    this._productService.changeQueries(this.selectedCategory, value)
  }

}
