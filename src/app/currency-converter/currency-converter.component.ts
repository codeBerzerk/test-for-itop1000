import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  rates: any = {};
  currencies: string[] = ['UAH', 'USD', 'EUR'];
  fromCurrency: string = 'UAH';
  toCurrency: string = 'USD';
  amount: number = 1;
  result!: number;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getRates().subscribe(data => {
      this.rates['UAH'] = 1;
      this.rates['USD'] = 1 / data.rates['USD'];
      this.rates['EUR'] = 1 / data.rates['EUR'];
      this.convertFrom();
    });
  }

  convertFrom(): void {
    const fromRate = this.rates[this.fromCurrency];
    const toRate = this.rates[this.toCurrency];
    this.result = this.amount * (toRate / fromRate);
  }

  convertTo(): void {
    const fromRate = this.rates[this.fromCurrency];
    const toRate = this.rates[this.toCurrency];
    this.amount = this.result * (fromRate / toRate);
  }

  getResult(): string {
    return this.result.toFixed(3);
  }

  getAmount(): string {
    return this.amount.toFixed(3);
  }
}
