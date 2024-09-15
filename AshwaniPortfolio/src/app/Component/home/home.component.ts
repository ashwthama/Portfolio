import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img: string = "";
  constructor() { }

  ngOnInit(): void {
    const rand=Math.random()*10;
    if(rand<5) {
      this.img = "FrontImageDark";
    }else{
    this.img = "FrontImage";
    }
  }
  
  
  

}
