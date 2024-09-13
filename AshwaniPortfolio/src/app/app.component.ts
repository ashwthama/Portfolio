import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AshwaniPortfolio';
  firstComponentOpacity: number = 1; // Starts fully visible
  secondComponentVisible: boolean = false; // Initially hidden

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    // Fade out the first component
    if (scrollPosition < windowHeight) {
      this.firstComponentOpacity = 1 - scrollPosition / windowHeight;
    }

    // Make second component visible after a certain scroll threshold
    if (scrollPosition > windowHeight / 2) {
      this.secondComponentVisible = true;
    } else {
      this.secondComponentVisible = false;
    }
  }

}
