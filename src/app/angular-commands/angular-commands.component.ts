import { Component } from '@angular/core';
import {SharedStateService} from "../shared-state.service";

@Component({
  selector: 'app-angular-commands',
  templateUrl: './angular-commands.component.html',
  styleUrls: ['./angular-commands.component.css']
})
export class AngularCommandsComponent {
  constructor(public sharedStateService: SharedStateService) { }
}
