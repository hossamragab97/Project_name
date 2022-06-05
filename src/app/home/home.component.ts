import { Component, OnInit } from '@angular/core';
import { buttonMove, welcomeMove } from 'src/app/shared/animations/toggle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[welcomeMove,buttonMove]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {
  }

}
