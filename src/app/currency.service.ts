import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  apiUrl: string = 'https://api.exchangerate-api.com/v4/latest/UAH';

  constructor(private http: HttpClient) { }

  getRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
