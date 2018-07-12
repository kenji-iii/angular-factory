import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { appRoutes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopComponent } from 'src/pages/top/top.component';
import { TestComponent } from 'src/pages/form/form.component';
import { FormsModule } from '@angular/forms';                // inputのデータバインディングに使う FormsModule を読み込む


const appRoutes: Routes = [
  {
    path: "search", // /search の場合のcomponentをセット
    component: TopComponent,
  },                                  // パスを指す Routes 型インスタンスを作成
  // { path: ' ', component: TopComponent },            // `/heroes` にアクセスした際に HeroesComponent を
  //   読み込み、`<router-outlet />` を
  //   置き換えて View を表示する
];
@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(      // Routerモジュールを作成する(provider込み)
      appRoutes,               //   パスを指す Routes 型の引数を設定
      { enableTracing: true },  //   デバッグ用出力を有効にする
    ),
    // RouterModule.forRoot(appRoutes)
    // RouterModule.forChild(appRoutes), // 追加
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
