import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-name-card',
  templateUrl: './angular-name-card.component.html',
  styleUrls: ['./angular-name-card.component.css']
})
export class AngularNameCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;
  constructor() { }

  ngOnInit(): void {
  }

}
