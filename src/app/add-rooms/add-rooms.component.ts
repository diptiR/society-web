import { Component, OnInit } from '@angular/core';
import { WINGS, FLOORS, ROOMS, VEHICLETYPES } from '../common/rooms.component';

interface ownerObj {
  id:number;
  name:string;
}

interface vehicleObj {
  id:number;
  type:string;
  regNumber:string;  
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
  vehicleTypes = VEHICLETYPES;
  ownerCtr = 1;
  vehicleCtr=1;
  selectedWing = this.wings[0].id; 
  selectedFloor = this.floors[0].id; 
  selectedRoom = this.rooms[0].id;
  owners:ownerObj[] = [{"id": 1, "name": undefined}]; 
  vehicles:vehicleObj[] = [{"id": 1, "type": undefined, "regNumber": undefined}];
  owner: string;
  roomNumber; 

  trackByFn(index, item) {
    return index;
}

  deleteCoOwner(index){
    this.owners.splice(index, 1);
  }

  addCoOwner(){
    this.ownerCtr = this.ownerCtr + 1;
    this.owners.push({"id": this.ownerCtr, "name": undefined});
  }

  addVehicle(){
    this.vehicleCtr = this.vehicleCtr + 1;
    this.vehicles.push({"id": this.vehicleCtr, "type":undefined, "regNumber": undefined});
  }

  deleteVehicle(index){
    this.vehicles.splice(index, 1);
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
