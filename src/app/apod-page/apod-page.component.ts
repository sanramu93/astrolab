import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apod-page',
  standalone: true,
  imports: [],
  templateUrl: './apod-page.component.html',
  styleUrl: './apod-page.component.scss',
})
export class ApodPageComponent implements OnInit {
  ngOnInit(): void {
    console.log('Init');
  }
}
