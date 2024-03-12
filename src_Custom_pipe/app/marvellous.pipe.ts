import { Pipe, PipeTransform } from '@angular/core';
// import {Marvell}
@Pipe
(
  {
    name: 'marvellous',
    standalone: true
  }
)
export class MarvellousPipe implements PipeTransform 
{
  // {{'Demo'|marvellous : "Hello" : "World" : "Angular"}}


  transform(value: unknown, ...args: unknown[]): unknown 
  {

    // console.log("Inside transform method");
    if(args[0] == "PPA")
    {
      return "Pre-Placement Activity";
    }
    if(args[0] == "Angular")
    {
      return "Angular with mean stack";
    }

    return null;
  }
}
