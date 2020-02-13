import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boxcomponent',
  templateUrl: './boxcomponent.component.html',
  styleUrls: ['./boxcomponent.component.css']
})
export class BoxcomponentComponent implements OnInit {
  @Input() boxJSON: [{'id': string, 'active': boolean}];
  constructor() { }

  ngOnInit() {
    console.log(this.boxJSON);
  }


  /**
   * method execute on click of every buton which get its button index as parameter
   * @param btnName :any
   */
  btnClicked(btnName: any) {
    try {
      const boxObj = this.boxJSON[btnName - 1];
      if (boxObj.active) { // check if corresponding button active 
        boxObj.active = false;
      } else {
        boxObj.active = true;
      }
    } catch (e) {
      console.log('issue in click event');
    }
  }
}
