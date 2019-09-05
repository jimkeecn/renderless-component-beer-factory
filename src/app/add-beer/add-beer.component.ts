import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { BeerService } from "./beer.service";

@Component({
  selector: "app-core-beer",
  template: "<ng-content></ng-content>"
})
export class BeerCoreComponent {
  beers: [];
  @Output() public beersChangeEvent = new EventEmitter<any[]>();

  constructor(private beerService: BeerService) {}

  public getBeers(): void {
    this.beerService.getBeers().subscribe(res => {
      this.beers = res;
      this.beersChangeEvent.emit(this.beers);
    });
  }

  public stockBeer(beer): void {
    this.beerService.stockBeer(beer).subscribe(res => {
      this.beers = res;
      this.beersChangeEvent.emit(this.beers);
    });
  }

  public sellBeer(beer): void {
    this.beerService.sellBeer(beer).subscribe(res => {
      this.beers = res;
      this.beersChangeEvent.emit(this.beers);
    });
  }
}
