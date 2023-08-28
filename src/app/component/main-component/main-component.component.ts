import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements AfterViewInit {
  @ViewChild('input') input!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.input.nativeElement.value);
  }
}
