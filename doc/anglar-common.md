# 共通の設定など

- `angular.module` について
- routeの設定


### Routeの設定
routeはangular.moduleのimportに記載（チュートリアル） 

```
import { RouterModule, Routes } from '@angular/router';

//routeの設定
const appRoutes: Routes = [
  { path: 'test', component: XXComponent },
  { path: '', component: ExchangeListComponent }
];
@NgModule({
  declarations: [AppComponent, ExchangeListComponent, PrivateComponent],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
})
export class AppModule {
}
```
今回は、app.routes.tsとして切り出す  
1. app.routes.tsファイルを作成

```
//ルーティング設定用
import { Routes } from '@angular/router';
//ルーティングで表示させたいコンポーネントを追加
import { XXComponent } from './xx/xx.component';

//限定させたい順にrouteを記載
export const appRoutes: Routes = [
  { path: 'test', component: XXComponent },
  { path: '', component: ExchangeListComponent }
];
```

2. app.module.tsに上記のapp.routes.tsをimport
```
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

// Route設定はapp.routes.tsに移動
@NgModule({
  declarations: [AppComponent],
  imports: [
    // RouterModule
    RouterModule.forRoot(appRoutes)
  ],
})
export class AppModule {
}
```
これで、app.module.tsはだいぶスッキリする
