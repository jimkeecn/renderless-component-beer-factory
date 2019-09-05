import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BeerService {
  beers = [
    {
      name: "bootz",
      quantity: 100,
      price: 20
    },
    {
      name: "Lopez",
      quantity: 100,
      price: 10
    },
    {
      name: "Stuart",
      quantity: 100,
      price: 14.5
    },
    {
      name: "delerab",
      quantity: 100,
      price: 9.8
    }
  ];
  constructor() {}

  /* return current beer data to the api */

  public getBeers(): Observable<any> {
    const beers$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.beers);
      }, 1000);
    });
    return beers$;
  }

  /* add one more beer into stock and return all beers 
     @param beer (any) : an beer object that has name, quantity, price
  */

  public stockBeer(beer): Observable<any> {
    const beers$ = new Observable(observer => {
      setTimeout(() => {
        this.beers.forEach(item => {
          if (item.name === beer.name) {
            item.quantity += 1;
          }
        });
        observer.next(this.beers);
      }, 1000);
    });
    return beers$;
  }

  /* remove 1 beer from stock and return all beers 
     @param beer (any) : an beer object that has name, quantity, price
  */

  public sellBeer(beer): Observable<any> {
    const beers$ = new Observable(observer => {
      setTimeout(() => {
        this.beers.forEach(item => {
          if (item.name === beer.name) {
            if (item.quantity > 0) {
              item.quantity -= 1;
            } else {
              alert("Ran out of " + item.name);
            }
          }
        });
        observer.next(this.beers);
      }, 1000);
    });
    return beers$;
  }
}
