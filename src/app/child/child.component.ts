import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public message = 'Child to parent using viewChild'
  @Input() messageFromParent: string = '';
  public messageFromChild = '';

  constructor() { }

  ngOnInit(): void {  
  }

  recieveMessage($event: string){
    this.messageFromChild = $event;

  }

}
