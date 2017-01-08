import { Component, OnInit } from '@angular/core';
import { Http, HttpModule} from '@angular/http';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: any;

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('/api/cars.json')
      .subscribe(response => this.cars = response.json());
  }
}
