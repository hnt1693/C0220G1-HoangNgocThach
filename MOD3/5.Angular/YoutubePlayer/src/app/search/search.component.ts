import {Component, OnInit} from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword: string;
  apiKey = 'AIzaSyD97RkY5sPhxP3mLUt1UF21ekmiw9Ul5HA';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeInput(value: string) {
    this.keyword = value;
  }
}
