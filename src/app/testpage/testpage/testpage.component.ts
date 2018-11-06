import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {

  constructor() { }

  today: number = Date.now();
  chattext = '';

  chatText(value: string): void {
    this.chattext += `${value}\n`;
  }

  menubarSelectionTitle: string;
  menubarSelection: boolean;
  welcomepage: boolean = true;

  clicked(value: any){
    this.menubarSelection = true;
    this.welcomepage = false;
    
    if(value==0){
      this.welcomepage = true;
      this.menubarSelection = false;
    }
    else if(value == 1){
      this.menubarSelectionTitle = "Studiengang Technik";
    }
    else if(value == 2){
      this.menubarSelectionTitle = "Studiengang Wirtschaftsinformatik";
    }
    else if (value == 3){
      this.menubarSelectionTitle = "Studiengang Recht";
    }
  }
  
  ngOnInit() {
  }

}
