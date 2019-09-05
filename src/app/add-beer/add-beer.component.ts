import { Component, OnInit, EventEmitter } from "@angular/core";
import { BeerService } from "./beer.service";

@Component({
  selector: "app-core-beer",
  inputs: ["beers"],
  template: "<ng-content></ng-content>"
})
export class BeerCoreComponent {
  public beers: [];
  public beersChangeEvent: EventEmitter<any[]>;

  constructor(private beerService: BeerService) {}

  public getBeers(): void {
    this.beerService.getBeers().subscribe(res => {
      this.beersChangeEvent.emit(res);
    });
  }
}
