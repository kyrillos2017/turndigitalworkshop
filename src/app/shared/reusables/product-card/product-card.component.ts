import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ToastrsService } from 'src/app/services/toastrs.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product : Product | undefined;

  quantites: number[] = []
  selectedQuantity = 1;
  selected = false

  constructor(private toast: ToastrsService) { }

  ngOnInit(): void {
    for (let i = 1; i < 10; i++) {
      this.quantites.push(i)
    }
  }

  public selectQuantity(quantity: number){
    this.selectedQuantity = quantity;

    if(this.selected)
    this.selectItem(false)
  }

  private updateCart(isNew = true){
    if(this.selected)
    this.toast.success(
      `${this.product?.name} is ${isNew? 'added' : 'updated'} with quantity ${this.selectedQuantity} item${this.selectedQuantity > 1 ? "s": ''} and total price of $${this.selectedQuantity * this.product?.price!}.`,
      `Item ${isNew? 'added' : 'updated'} successfully`
    )

    else
    this.toast.info(
      `${this.product?.name} is removed with quantity ${this.selectedQuantity} item${this.selectedQuantity > 1 ? "s": ''} and total price of $${this.selectedQuantity * this.product?.price!}.`,
      "Item removed successfully"
    )
  }

  public selectItem(isNew = true){
    this.updateCart(isNew)
  }

}
