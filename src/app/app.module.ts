import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module'
import { WatchlistService } from './core/services/watchlist.service'
import { ModalDetailsMovieService } from './core/services/modal-details-movie.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [WatchlistService, ModalDetailsMovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
