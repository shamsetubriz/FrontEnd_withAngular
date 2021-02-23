import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  public parentMessage: string = 'Hi Boy!';
  public dataFromChild = '';
  @ViewChild(ChildComponent) childInstance;

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.dataFromChild = this.childInstance.message;
  }

}
