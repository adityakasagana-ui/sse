import { Component } from '@angular/core';
import { BoxserviceService } from './service/boxservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boxsample';
  boxjson: any;
  constructor(private boxService: BoxserviceService) {
    // Get Box JOSN from service
    this.boxjson = boxService.getboxJSON();
  }
}
