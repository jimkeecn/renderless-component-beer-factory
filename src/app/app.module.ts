import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BeerCoreComponent } from "./add-beer/add-beer.component";

@NgModule({
  declarations: [AppComponent, BeerCoreComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
