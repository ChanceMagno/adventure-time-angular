import { Component, OnInit } from '@angular/core';
import { Room } from '../room.model';
import { AdventureService } from '../adventure.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  sequenceNumber: number = null;
  room: Room;

  constructor(private route: ActivatedRoute, private location: Location, private adventureService: AdventureService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params) => {
      this.sequenceNumber = parseInt(params['roomId']);
    });
    this.adventureService.getRoom(this.sequenceNumber).subscribe(rooms => {
      this.room = rooms[0];
    })
  }

}
