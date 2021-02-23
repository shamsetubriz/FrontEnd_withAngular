import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-block',
  templateUrl: './number-block.component.html',
  styleUrls: ['./number-block.component.scss']
})
export class NumberBlockComponent implements OnInit {

  viewMode = 'all';
  allNumbers: number[] = [];
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  tensNumbers: number[] = [];
  primeNumbers: number[] = [];

  constructor() { 
    this.allNumbers = [...Array(100).keys()];
  }

  ngOnInit(): void {
    this.evenNumbers = this.allNumbers.filter((number) => number % 2 ===0);
    this.oddNumbers = this.allNumbers.filter((number) => number % 2 !==0);
    this.tensNumbers = this.allNumbers.filter((number) => number % 10 ===0);
    this.primeNumbers = this.allNumbers.filter((number) => {
      for (var i = 2; i<= Math.sqrt(number); i++) {
        if(number % i ===0) return false;
      }
      return true;
    });
  }

}
