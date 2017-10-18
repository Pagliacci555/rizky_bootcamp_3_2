import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomlist',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomlistComponent implements OnInit {

  public roomList: Object[] = [
    {'number' : '1', 'name' : 'A', 'Unit_Area' : '72', 'Availability' : '0', 'price' : '750'},
    {'number' : '2', 'name' : 'B', 'Unit_Area' : '40', 'Availability' : '1', 'price' : '580'},
    {'number' : '3', 'name' : 'C', 'Unit_Area' : '56', 'Availability' : '0', 'price' : '550'},
    {'number' : '4', 'name' : 'D', 'Unit_Area' : '77', 'Availability' : '0', 'price' : '620'},
    {'number' : '5', 'name' : 'E', 'Unit_Area' : '89', 'Availability' : '1', 'price' : '760'},
  ];

  order(id) : void {
    for (var i = 0; i < this.roomList.length; i++) {
      if (this.roomList[i]['name'] == id) {
        this.roomList[i]['Availability'] = false;
        break;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}