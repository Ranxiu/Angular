import { Component, OnInit } from '@angular/core';  //引入angular核心类文件
import {Hero} from '../hero';
import {HEROES} from '../service/mock-heroes'; //引入模拟数据 HEROES常量
@Component({
  selector: 'app-list',  //组件的选择器（CSS 元素选择器）
  templateUrl: './list.component.html',  // 组件模板文件的位置
  styleUrls: ['./list.component.less']   //组件私有 CSS 样式表文件的位置
})
export class ListComponent implements OnInit {

  heroes=HEROES;

  selectedHero:Hero;  //Hero代表该数据的类型

  onClick(hero:Hero):void {
    this.selectedHero = hero;  //给属性selectedHero赋值当前点击行的数据
  }

  constructor() { }


  //ngOnInit是一个生命周期钩子，以便在其他地方导入它（比如AppModule）
  ngOnInit() {
  }

}
