import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-leaut',
  templateUrl: './leaut.component.html',
  styleUrls: ['./leaut.component.css']
})
export class LeautComponent implements OnInit {
  url: string = "https://api.openweathermap.org/data/2.5/weather?q=gyumri&appid=45b060276ac659127f9d09d36897bc13&units=metric"

  @ViewChild('city') input!: ElementRef
  ngOnInit(): void {
    console.log(this.input);
  }
}
