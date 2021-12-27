import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuRoutingModule } from './menu-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardModule } from 'src/app/shared/reusables/product-card/product-card.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuComponent,
    MenuHeaderComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule,
    ProductCardModule,
    FormsModule
  ]
})
export class MenuModule { }
