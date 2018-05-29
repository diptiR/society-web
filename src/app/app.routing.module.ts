import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OwnerComponent} from './owner/owner.component';
import {AddRoomsComponent} from './add-rooms/add-rooms.component';
const routes: Routes = [
{ path: 'owner', component: OwnerComponent },
{ path: 'addRooms', component: AddRoomsComponent },
{path : '', component : OwnerComponent}
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }