import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousService } from '../marvellous.service'; // import service


@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css',
  providers :[ MarvellousService ] // we have to add this line so we can see service
})

export class BatchdetailsComponent
{
  public Batches : any = [];


  constructor(private obj:MarvellousService)
  {
    this.Batches = obj.GetBatches();
  }
}