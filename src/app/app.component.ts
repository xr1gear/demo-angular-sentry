import {Component} from '@angular/core';
import {SharedStateService} from "./shared-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular-sentry';
  isTimeoutReached: boolean = false;

  constructor(public sharedStateService: SharedStateService) {

  }

  throwError() {
    throw Error("Sample error: " + this.sharedStateService.userName + " id: " + this.sharedStateService.randomId);
  }

  isEnabledAfterUsernameAnd60SecondTimeout() {
    if(this.sharedStateService.userName) {
      setTimeout(() => {
        this.isTimeoutReached = true;
      }, 60000);
    }

    return this.sharedStateService.userName && this.isTimeoutReached;
  }
}
