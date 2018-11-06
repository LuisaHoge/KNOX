import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PasswordstrengthService} from '../LoginServices/passwordstrength.service';

@Component({
  selector: 'app-register-and-login',
  templateUrl: './register-and-login.component.html',
  styleUrls: ['./register-and-login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterAndLoginComponent implements OnInit {

  constructor(private myservice: PasswordstrengthService) { }

  emailpattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  InputRegPassword:string;
  strength;
  strengthIsAdded: boolean;
  checkbox;
  progressbarRed: boolean;
  progressbarYellow: boolean;
  progressbarGreen: boolean; 

  sendValuesCheckBox(){
    this.strength = this.myservice.sendValues(this.InputRegPassword);
    this.strengthIsAdded = true;
   
      if (this.checkbox = true) {
        setTimeout(()=>{
          this.checkbox = false;
          this.strengthIsAdded = false;
        }, 1700)
      }
  
     if(this.strength.includes("Passwort ist schwach!")){
        this.progressbarRed = true;
        this.progressbarGreen, this.progressbarYellow = false;
      }
      else if(this.strength.includes("Passwort ist medium!")){
        this.progressbarYellow = true;
        this.progressbarGreen, this.progressbarRed = false;
      }
      else {
        this.progressbarGreen = true;
        this.progressbarRed, this.progressbarYellow = false;
      } 
    }



  ngOnInit() {
  }

}
