import { Injectable } from '@angular/core';


@Injectable()
export class PasswordstrengthService {

  constructor() { }
  
  PasswordMinLen = 3;
  strength;
  
  progressbarRed: boolean;
  progressbarYellow: boolean;
  progressbarGreen: boolean;

  sendValues(inputRegPassword:string): void {

    let numberOfElements = 0;
    numberOfElements = /.*[a-z].*/.test(inputRegPassword) ? ++numberOfElements : numberOfElements;      // Lowercase 
    numberOfElements = /.*[A-Z].*/.test(inputRegPassword) ? ++numberOfElements : numberOfElements;      // Uppercase
    numberOfElements = /.*[0-9].*/.test(inputRegPassword) ? ++numberOfElements : numberOfElements;      // Numbers
    numberOfElements = /[^a-zA-Z0-9]/.test(inputRegPassword) ? ++numberOfElements : numberOfElements;   //special characters
  
            if (inputRegPassword === null || inputRegPassword.length < this.PasswordMinLen) {
              this.strength = 'Passwort ist schwach!';
            }
             else if (numberOfElements === 0 || numberOfElements === 1 || numberOfElements === 2) {
              this.strength = 'Passwort ist schwach!';
            } 
            else if (numberOfElements === 3) {
              this.strength = 'Passwort ist medium!';
            } 
            else {
              this.strength = 'Passwort ist stark!';
            }

     return this.strength;
    }
}
