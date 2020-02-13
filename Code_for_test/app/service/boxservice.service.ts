import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxserviceService {

  constructor() { }

  /**
   * Method used to provide Array of object of box
   */
  getboxJSON() {
    return [{id: 1, active: true}, {id: 2, active: true}, {id: 3, active: true}, {id: 4, active: true}];
  }
}
