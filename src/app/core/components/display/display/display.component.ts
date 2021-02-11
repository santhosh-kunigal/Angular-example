import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input('responses') response:Response;
  constructor() { }

  apiData: any = "Nothing to show"
  ngOnInit(): void {
  }

}
