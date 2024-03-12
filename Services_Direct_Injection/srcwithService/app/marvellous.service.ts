import { Injectable } from '@angular/core'; // injectable

@Injectable({
  providedIn: 'root' // inject at any whare root
})
export class MarvellousService {

  constructor() { 
    
  }
  Friends()
  {
    return[
      {"Niru":"Jivlag","Kuthe Bhetla":"School","Kadhi":"10th la"},
      {"Manthan":"Jivlag","Kuthe Bhetla":"School","Kadhi":"10th la"},
      {"Pk":"Best Friend","Kuthe Bhetla":"School","Kadhi":"10th la"},
      {"Niraj":"Jiv","Kuthe Bhetla":"Wadia","Kadhi":"2015"},
      {"Teju":"Prem","Kuthe Bhetla":"Office","Kadhi":"AAta 6 mahine zaale"}
    ];
  }

}
