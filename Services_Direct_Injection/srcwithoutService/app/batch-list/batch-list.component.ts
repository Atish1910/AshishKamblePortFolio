import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent {
  public Batches =
  [
    {"Name":"PPA"},
    {"Name":"LB"},
    {"Name":"Python"},
    {"Name":"LSP"}
  ];
}
