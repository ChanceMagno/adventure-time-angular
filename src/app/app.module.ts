import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoomNewComponent } from './room-new/room-new.component';
import { AdventureService } from './adventure.service';
import { RoomComponent } from './room/room.component';
import { PlayerStatsPipe } from './player-stats.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RoomNewComponent,
    RoomComponent,
    PlayerStatsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AdventureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
