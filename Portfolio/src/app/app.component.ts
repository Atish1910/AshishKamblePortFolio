import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  languages = [
    { name: 'Javascript', logo: '1' },
    { name: 'Typescript', logo: '2' },
    { name: 'Php', logo: '3' },
    { name: 'Java', logo: '4' },
    { name: 'C++', logo: '5' },
    { name: 'C', logo: '6' }
  ];

  frameworks = [
    { name: 'Angular V17', logo: '1' },
    { name: 'Bootstrap 5', logo: '2' },
    { name: 'Material Design', logo: '3' },
    { name: 'Css 3', logo: '4' },
    { name: 'Node Js', logo: '5' },
    { name: 'Express Js', logo: '6' },
    { name: 'JQuery', logo: '7' },
    { name: 'JSON', logo: '8' }
  ];

  
  tools = [
    { name: 'My SQL', logo: '1' },
    { name: 'MongoDB', logo: '2' },
    { name: 'Git Hub', logo: '3' },
    { name: 'Xampp', logo: '4' },
    { name: 'AWS', logo: '5' },
  ];
}
