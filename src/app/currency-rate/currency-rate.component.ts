import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.css']
})
export class CurrencyRateComponent implements OnInit {
  usdRate!: number;
  eurRate!: number;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getRates().subscribe(data => {
      this.usdRate = 1 / data.rates['USD'];
      this.eurRate = 1 / data.rates['EUR'];
    });
  }

  getUsdRate(): string {
    return this.usdRate.toFixed(3);
  }

  getEurRate(): string {
    return this.eurRate.toFixed(3);
  }
}
