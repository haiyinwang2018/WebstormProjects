import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = '无锡正川机床加工有限公司';
  }

  ngOnInit() {
  }

}
