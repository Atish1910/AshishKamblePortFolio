import { Component, Output, EventEmitter } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{

  @Output() public LaserLight = new EventEmitter(); // add karan compulsary aahe


  public SendMsg()
  {
    this.LaserLight.emit("Hello Parent..."); // emit is use to (light maran)
    

  }
  
}
