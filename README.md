# angular-factory
* 環境構築はubuntu等のlinuxでやると楽

## angularの開発環境構築
- angular-cli  
  angularのフレームワークを作るためのツール。
  tsのbuildやcomponentの作成など様々。
- angular-flexbox
- angular-material

### angular-cliの導入
前提：node.js npm が使えること  
- node.js npmのインストール
  - node.jsのインストール （windowsの場合） 
    1. Node.jsのHP（以下のURL）よりインストーラーをダウンロードする。
      https://nodejs.org/en/download/
    2. 以下のコマンドより、Node.jsが入っていることとバージョンを確認する。
        `node --version`
    3. 以下のコマンドより、npmが入っていることとバージョンを確認する。
        `npm --version`
  - node.jsのインストール （Ubuntuの場合） 
    これは簡単  
  　
    ```
    sudo apt update
    sudo apt install nodejs
    sudo apt install npm
    ```
    
  - 時々古いと怒られるから最新版にupdate
    
    ```
    sudo npm cache clean
    sudo npm install -g n
    sudo n stable
    sudo npm update -g npm
    ```

## webサーバ
- nginx  
  フリーかつオープンソースなWebサーバ
   　　


