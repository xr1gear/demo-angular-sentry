import {Component} from '@angular/core';
import {SharedStateService} from "../shared-state.service";
import {HttpClient} from "@angular/common/http";
import {share} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  name = '';
  location = '';

  weather = '';
  pressure = '';
  description = '';

  constructor(public sharedStateService: SharedStateService, private http: HttpClient) {
    this.name = sharedStateService.userName;
    this.location = sharedStateService.location;
  }

  loadForecastWeather(): any {
    this.http.get("https://api.openweathermap.org/data/2.5/forecast?zip=" + this.sharedStateService.location + ",us&APPID=859ec29dca560e5d6e8c4226a385ca0c&units=imperial")
      .subscribe((res: any) => {
        let firstOne = res.list[0];
        this.weather = firstOne.main.temp;
        this.pressure = firstOne.main.pressure;
        this.description = firstOne.weather[0].description;
        console.log(JSON.stringify(res));
      });
  }

  protected readonly share = share;
}
