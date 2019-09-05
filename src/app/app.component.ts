import { Component } from "@angular/core";
import { BeerService } from "./add-beer/beer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "rentless-component";
  beers = [];

  constructor(private beerService: BeerService) {
    this.beerService.getBeers().subscribe(res => {
      this.beers = res;
    });
  }

  refreshBeerBoard(beers: any) {
    this.beers = beers;
  }
}
