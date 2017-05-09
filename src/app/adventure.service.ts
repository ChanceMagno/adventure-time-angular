import { Injectable } from '@angular/core';
import { Room } from './room.model';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AdventureService {
  rooms: FirebaseListObservable<any>;
  player: Player;

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
        equalTo: sequence,
      }
    });
  }

  createPlayer() {
    this.player = new Player('test player');
  }

  getPlayer() {
    return this.player;
  }

  increaseScore() {
    this.player.score ++;
  }

  decreaseHealth() {
    this.player.health -= 3;
  }

  updateLastResult(lastResult: string) {
    this.player.lastResult = lastResult;
  }

}
