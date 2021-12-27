import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category, ServerData } from '../models/categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private http: HttpClient;
  private readonly baseUrl = 'assets/data/data.json';

  constructor(
    injector: Injector
  ) {
    this.http = injector.get(HttpClient)
   }

   protected get() : Observable<Category[]> {
    return this.http.get<ServerData>(this.baseUrl)
    .pipe(map((data: ServerData) => data.categorys))
   }
}
