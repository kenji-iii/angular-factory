//ルーティング設定用
import { Routes } from '@angular/router';

//ルーティングで表示させたいコンポーネントを追加
import { TopComponent } from 'src/pages/top/top.component';
import { TestComponent } from 'src/pages/form/form.component';
//限定させたい順にrouteを記載
export const appRoutes: Routes = [
  { path: 'form', component: TestComponent },
  { path: 'dd', component: TopComponent },
  { path: 'heroes', component: TopComponent }
];
