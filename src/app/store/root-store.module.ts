import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { effects } from './effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot(reducers), EffectsModule.forRoot(effects)],
})
export class RootStoreModule {}
