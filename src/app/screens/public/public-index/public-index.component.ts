import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-index',
  templateUrl: './public-index.component.html',
  styleUrls: ['./public-index.component.css']
})
export class PublicIndexComponent implements OnInit{
  step !: number;
  ngOnInit(): void {
    this.step = 0;
  }
}
