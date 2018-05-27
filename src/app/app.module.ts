import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    AddRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
