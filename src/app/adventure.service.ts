import { Injectable } from '@angular/core';
import { Room } from './room.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AdventureService {
  rooms: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.rooms = this.db.list('/rooms');
  }

  getRooms() {
    return this.rooms;
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }

  getRoom(sequence: number) {
    return this.db.list('/rooms', {
      query: {
        orderByChild: 'sequence',
        equalTo: sequence
      }
    });
  }

}
