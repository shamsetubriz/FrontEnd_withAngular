import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrl = 'https://www.gstatic.com/webp/gallery/4.jpg';
  public title = "This is the Title of Home Page"
  public name = "Monu";
  public duration = 1;
  public userName: any;
  public clickCounter = 0;
  public isSpecial = false;
  public applyStyle = true;
  public
  isActive = false;
  isAuthenticated = true;
  actionName = "Aria enhancement";
  destinationnUrl = 'http://google.com';
  alternativeUrl = 'http://bing.com';



  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.clickCounter ++;
    console.log('User clicked');
  }

  onKeyPressed(event: any){
    console.log('User pressed the ', event.key);

  }



}
