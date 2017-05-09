import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdventureService } from '../adventure.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private adventureService: AdventureService) { }

  ngOnInit() {
  }

  start() {
    this.adventureService.createPlayer();
    this.router.navigate(['room', 1]);
  }

}
