import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardwallBaseComponent } from './cardwall-base/cardwall-base.component';

import { RootStoreModule } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/utils/custom-route-serializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, CardwallBaseComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    RootStoreModule,
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
