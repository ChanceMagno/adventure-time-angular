import { Component, OnInit, EventEmitter } from '@angular/core';
import { Room } from '../room.model';
import { Player } from '../player.model';
import { AdventureService } from '../adventure.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  sequenceNumber: number = null;
  room: Room;
  player: Player;
  lastSequence: number = null;

  loseAction = new EventEmitter<string|MaterializeAction>();
  winAction = new EventEmitter<string|MaterializeAction>();

  constructor(private route: ActivatedRoute, private location: Location, private adventureService: AdventureService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.sequenceNumber = parseInt(params['roomId']);
      this.adventureService.getRoom(this.sequenceNumber).subscribe(rooms => {
        this.room = rooms[0];
      })
      this.adventureService.getRooms().subscribe(rooms => {
        this.lastSequence = rooms.length;
      })
      this.player = this.adventureService.getPlayer();
    })
  }

  goodChoice() {
    if (this.sequenceNumber === this.lastSequence) {
      this.adventureService.increaseScore();
      this.winModal();
    } else {
      var newSequence = this.sequenceNumber + 1;
      this.adventureService.increaseScore();
      this.adventureService.updateLastResult(this.room.goodResult);
      this.router.navigate(['room', newSequence]);
    }
  }

  badChoice() {
    if (this.sequenceNumber === this.lastSequence) {
      if (this.player.health > 3) {
        this.adventureService.decreaseHealth();
        this.winModal();
      } else {
        this.adventureService.decreaseHealth();
        this.loseModal();
      }

    } else {
      if (this.player.health > 3) {
        var newSequence = this.sequenceNumber + 1;
        this.adventureService.decreaseHealth();
        this.adventureService.updateLastResult(this.room.badResult);
        this.router.navigate(['room', newSequence]);
      } else {
        this.adventureService.decreaseHealth();
        this.loseModal();
      }
    }

  }

  loseModal() {
    this.loseAction.emit({action:"modal",params:['open']});
  }
  winModal() {
    this.winAction.emit({action:"modal",params:['open']});
  }

}
