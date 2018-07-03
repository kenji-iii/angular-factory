//ルーティング設定用
import { Routes } from '@angular/router';
//ルーティングで表示させたいコンポーネントを追加
import { TopComponent } from '../pages/top/top.component';

//限定させたい順にrouteを記載
export const appRoutes: Routes = [
  { path: '', component: TopComponent }
];
