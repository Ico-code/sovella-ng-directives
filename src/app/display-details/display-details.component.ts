import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  loki = [];
  show_details: boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

  getDetails(){
    return this.show_details
  }
  lokiPaivitys(){
    let clock= new Date();

    this.loki.push(this.show_details === false ? 'details were opened at ' + clock.toLocaleString(): 'details were closed at ' + clock.toLocaleString());
    this.show_details = this.show_details === true ? false : true;
  }
}
