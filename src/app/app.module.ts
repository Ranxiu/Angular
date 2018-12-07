import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 引入双向数据绑定模块

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  //引入组件
import { HeroesComponent } from './heroes/heroes.component'; //引入app模块下的heroes组件

@NgModule({
  declarations: [
    /*声明模块中有什么东西  只能声明 组件 指令 管道 */
    AppComponent,
    HeroesComponent
  ],
  imports: [
    /*声明该模块所依赖的模块 */
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  /*默认情况下为空 只能声明模块中听过的服务*/
  providers: [],

  /*声明模块的主组件是什么 */
  bootstrap: [AppComponent]
})
export class AppModule { }
