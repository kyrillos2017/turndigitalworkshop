import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrsService {

  constructor(private toastr: ToastrService) { }

  success(message?: string | undefined, title?: string | undefined) {
    this.toastr.success(message, title);
  }

  info(message?: string | undefined, title?: string | undefined) {
    this.toastr.info(message, title);
  }
}
