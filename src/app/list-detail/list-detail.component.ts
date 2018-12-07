import { Component, OnInit,Input } from '@angular/core';
import { Hero } from "../hero";
@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.less']
})
export class ListDetailComponent implements OnInit {

@Input() hero:Hero;
  constructor() { }

  ngOnInit() {
  }

}
