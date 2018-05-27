import { Component, OnInit } from '@angular/core';
import { WINGS, FLOORS, ROOMS } from '../common/rooms.component';

interface ownerObj {
  id:string;
  name:string;
}

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {
  wings = WINGS;
  floors = FLOORS;
  rooms = ROOMS;
  ownerCtr = 1;
  selectedWing = this.wings[0].id; 
  selectedFloor = this.floors[0].id; 
  selectedRoom = this.rooms[0].id;
  owners = [""]; 
  owner: string;
  roomNumber; 

  trackByFn(index, item) {
    return item; 
}

  addCoOwner(){
    this.owners.push("");
  }

  generateRoomNumber(){
    this.roomNumber = this.selectedWing.toUpperCase() + "/" + this.selectedFloor + "0" + this.selectedRoom;
  }

  onWingChange(value){
    this.selectedWing = value;    
    this.generateRoomNumber();
  }

  onFloorChange(value){
    this.selectedFloor = value;
    this.generateRoomNumber();
  }

  onRoomChange(value){
    this.selectedRoom = value;
    this.generateRoomNumber();
  }
  
  constructor() {
     
   }

  ngOnInit() {
    this.generateRoomNumber();
  }

}
