import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoomlistComponent } from './room-list/room-list.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomlistComponent,
    TransactionComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : '', component : RoomlistComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
