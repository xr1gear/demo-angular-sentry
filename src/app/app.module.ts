import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Router} from "@angular/router";
import * as Sentry from '@sentry/angular';
import { FunFormComponent } from './fun-form/fun-form.component';
import { AngularCommandsComponent } from './angular-commands/angular-commands.component';
import { MainComponent } from './main/main.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SharedStateService} from "./shared-state.service";

@NgModule({
  declarations: [
    AppComponent,
    FunFormComponent,
    AngularCommandsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler(),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
