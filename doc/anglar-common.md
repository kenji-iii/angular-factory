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

3. Refresh時に404エラー
angularではrouterlink以外遷移で404エラーとなる。ただし、`ng serve` する場合はは発生しない。これは内部のweb serverが404エラー時にindex.htmlを見るように設定されているから  
Nginx側で ` /index.html =404;` を追加する


4. 複数のrouter-outletを使用する
  - nameにルーティングで設定したoutletの値を入れる
```
<router-outlet name="navigation"></router-outlet>
<router-outlet></router-outlet>
```


## http

1 header
  - content-type
    - application/x-www-form-urlencoded
    - multipart/form-data
      ```
        $image = $request->image;  // your base64 encoded
        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);
        $imageName = str_random(10).'.'.'png';
        \File::put(storage_path(). '/' . $imageName, base64_decode($image));
      ```
