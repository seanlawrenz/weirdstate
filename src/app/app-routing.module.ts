import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardwallBaseComponent } from '@app/cardwall-base/cardwall-base.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
