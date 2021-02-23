import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grang-child',
  templateUrl: './grang-child.component.html',
  styleUrls: ['./grang-child.component.scss']
})
export class GrangChildComponent implements OnInit {
  public message = 'Hello Parent';
  @Input() messageFromGrandParent: string = '';
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessag(){
    this.messageEvent.emit(this.message);
  }

}
