import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-batch-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css'
})
export class BatchDetailsComponent {
  public Batches =
  [
    {"Name":"PPA","Fees":"19500","Duration":"4 Months"},
    {"Name":"LB","Fees":"20500","Duration":"4 Months"},
    {"Name":"Python","Fees":"21500","Duration":"4 Months"},
    {"Name":"LSP","Fees":"22500","Duration":"4 Months"}
  ];

}
