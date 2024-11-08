import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SharedStateService} from "../shared-state.service";
import {FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fun-form',
  templateUrl: './fun-form.component.html',
  styleUrls: ['./fun-form.component.css']
})
export class FunFormComponent implements AfterViewInit {

  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private isDrawing = false;

  ngAfterViewInit() {
    this.ctx = this.canvasElement.nativeElement.getContext('2d')!;
    this.addCanvasEventListeners();
  }

  private addCanvasEventListeners() {
    const canvas = this.canvasElement.nativeElement;

    canvas.addEventListener('mousedown', this.startDrawing.bind(this));
    canvas.addEventListener('mousemove', this.draw.bind(this));
    canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
    canvas.addEventListener('mouseout', this.stopDrawing.bind(this));
  }

  private startDrawing(event: MouseEvent) {
    this.isDrawing = true;
    this.draw(event);
  }

  private draw(event: MouseEvent) {
    if (!this.isDrawing) return;

    const rect = this.canvasElement.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = 'black';

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  private stopDrawing() {
    this.isDrawing = false;
    this.ctx.beginPath();
  }

  model = {
    firstName: undefined,
    lastName: undefined,
    username: undefined,
    email: undefined,
    address: undefined,
    address2: undefined,
    zip: undefined,
    sameAddress: undefined,
    saveInfo: undefined,
    credit: undefined,
    debit: undefined,
    paypal: undefined,
    nameOnCard: undefined,
    creditCardNumber: undefined,
    expiration: undefined,
    cvv: undefined
  };

  constructor(public sharedStateService: SharedStateService, private http: HttpClient) { }

  onSubmit() {

    // console.log(JSON.stringify(this.model));
    // this.http.post("http://localhost", this.model)
    //   .subscribe((res: any) => {
    //     console.log(JSON.stringify(res));
    //   });

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(this.model),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  }
}
