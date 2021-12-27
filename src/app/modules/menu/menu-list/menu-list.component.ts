import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Data } from 'src/app/models/products';
import { Query } from 'src/app/models/query';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, OnDestroy {

  product$: Observable<Data[]> = of([])
  subscription: Subscription = new Subscription();

  constructor(
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.subscription = this._productService.currentFilter
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe((res: Query | null) => {
      this.product$ = res? this._productService.getAll(res.category, res.query) : this._productService.getAll(null, null);
    })
  }

  toggleClass(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);

    if(hasClass) {
      event.target.classList.remove(className);
    } else {
      event.target.classList.add(className)
    }
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
