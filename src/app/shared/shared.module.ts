import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SharedRoutingModule } from './shared-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ToastrModule, ToastrService } from 'ngx-toastr';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  exports: [
    BsDropdownModule,
    AccordionModule
  ],
})
export class SharedModule { }
