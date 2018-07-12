import { Component, OnInit } from '@angular/core';

@Component({                                            // @Componentデコレータを使ってコンポーネントを定義
  selector: 'top',
  templateUrl: './top.component.html',
  // styleUrls: ['./heroes.component.css']                 //   - スタイルシートとして./heroes.component.cssを使う
})
export class TopComponent implements OnInit {        // OnInitインタフェースを継承してHeroesComponentクラスを定義して、exportする


  constructor(                                          // コンストラクタの定義
    // private heroService: HeroService                    // HeroServiceサービスを注入(インスタンスをheroServiceプロパティに代入する)
  ) { }

  ngOnInit() {                                          // lifecycle hook 関数の ngOnInit を実装
  }

}
