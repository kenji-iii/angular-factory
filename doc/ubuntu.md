# Ubuntuセットアップメモ
- 将来的に切出し


### NGINXの設定 
なおconfigについてはnginx.mdを参照
公式URL[https://www.nginx.com/resources/wiki/start/topics/tutorials/install/]


下記はwsl（ubuntu）での実行例
```
sudo -s
nginx=stable # use nginx=development for latest development version
add-apt-repository ppa:nginx/$nginx
apt-get update
apt-get install nginx
```

nginxを自動的に起動する方法
`sudo update-rc.d nginx defaults`

- nginx.conf(/etc/nginx)  
一般的には `nginx.conf` に設定はすべて記載する事が可能。しかし、メンテナビリティにかける。  
そのため、`sites-available` 配下に設定ファイルを置き、`sites-enabled` にシンボリックリンクを貼ることによって外部に分離させる。  
※ポートを80に設定していると下記のエラーが出ることがある。そのため別のポート番号に変更することをおすすめ
`2018/07/05 18:33:05 [emerg] 1797#1797: bind() to 0.0.0.0:80 failed (13: Permission denied)`

```
//nginx.confはhttpディレクティブ内を下記に修正。
//sites-availableに記述した設定をsites-enabledにシンボリックリンクを張って読み込ませるため


修正前
include /etc/nginx/conf.d/*.conf;　//conf.d内の拡張子が.confのものも含める
修正後
include /etc/nginx/sites-enabled/*;
```

### Dockerの設定   
WSLの場合、下記の方法でDockerのインストールは成功する
```
sudo apt update
sudo apt upgrade
sudo apt install docker.io
sudo cgroupfs-mount
sudo usermod -aG docker $USER
sudo service docker start
```

下記は公式サイトの情報だがWSLを使用した場合うまくいかない
- 環境構築にDockerを使用
  下記手順にてインストール
  1. Update the apt package index:
     `sudo apt-get update`
  2. Install packages to allow apt to use a repository over HTTPS:
      `sudo apt-get install apt-transport-https`  
      `sudo apt-get install ca-certificates`  
      `sudo apt-get install curl`  
      `sudo apt-get install software-properties-common`  
  3. Add Docker’s official GPG key:
    `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
  4. リポジトリを設定するには、次のコマンドを使用。repositoryの最後に`edge` `test` `stable` いずれかをつける  
    `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`
  5. DOCKER CEをインストールする 
    `sudo apt-get update`
  6. レポで利用可能なバージョンを一覧表示する
    `apt-cache madison docker-ce`
  7. 「6」で一覧表示される中から、特定のバージョンをパッケージ名を指定してインストール。（docker-ce） "=" version  
    `sudo apt-get install docker-ce=18.03.1~ce-0~ubuntu`
  8. Dockerを起動
    `sudo service docker start`
    
    
    
  


