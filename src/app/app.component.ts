import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SportComponent } from '../sport/sport.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SportComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent implements AfterViewInit{
  title = 'ngcontentproject';
  @ViewChild('myInput') myInputRef: ElementRef | undefined;
  
  @ViewChild(SportComponent) sportComponent: SportComponent | undefined;

  
  @ViewChildren('myInput1') myInputRefs: QueryList<ElementRef> | undefined;
  
  ngAfterViewInit(): void {
    this.myInputRef?.nativeElement.focus();
    this.sportComponent?.sendToParent();
    for (const input of this.myInputRefs?.toArray() || []) {
      input.nativeElement.value = 'Hello';
    }
  }



  onclick(data: any) {
    console.log(data);
  }
}
