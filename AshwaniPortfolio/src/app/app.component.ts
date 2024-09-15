import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AshwaniPortfolio';
  firstComponentOpacity: number = 500; 
  secondComponentVisible: boolean = false; 
  thirdComponentVisible: boolean = false; 
  // position = { x: 0, y: 0 };

  // onMouseMove(event: MouseEvent): void {
  //   this.position.x = event.clientX - 50; 
  //   this.position.y = event.clientY - 50; 
  // }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition < windowHeight) {
      this.firstComponentOpacity = 1 - scrollPosition / windowHeight;
    }

    if (scrollPosition > windowHeight / 2 && scrollPosition < windowHeight * 1.5) {
      this.secondComponentVisible = true;
    } else {
      this.secondComponentVisible = false;
    }

    if (scrollPosition > windowHeight * 1.5) {
      this.thirdComponentVisible = true;
    } else {
      this.thirdComponentVisible = false;
    }
  }

}
