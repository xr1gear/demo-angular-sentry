import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FunFormComponent} from "./fun-form/fun-form.component";
import {AngularCommandsComponent} from "./angular-commands/angular-commands.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  { path: 'checkout-form', component: FunFormComponent },
  { path: 'commands', component: AngularCommandsComponent },
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
