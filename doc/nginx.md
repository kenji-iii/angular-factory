# nginx

## defalt.conf
- server
  バーチャルサーバの設定を記述
  
- listen
    listen IPアドレス:ポート番号;
複数のバーチャルサーバを運用するとき
IPベースあるいは名前ベースのバーチャルサーバとして区別
serverに記述するlistenディレクティブ
server_nameディレクティブにより、区別する。

`listen 192.0.2.1:80;`
V6の場合
IPv6の場合は `[2001:0db8:1234:5678:90ab:cdef:0000:0000]` のように角括弧で囲む

- URIのパス毎の設定 - location
```
location / {
    [locationコンテキスト]
}
location プレフィックス URIのパス {
    [locationコンテキスト]
}
プレフィックス	説明
なし	前方一致
^~	前方一致。一致したら、正規表現の条件を評価しない。
=	完全一致。パスが等しい場合。
~	正規表現（大文字・小文字を区別する）
~*	正規表現（大文字・小文字を区別しない）
```




## cors設定


authを用意る場合
withCredentials をつける  
```
return this.http.get<string>('url', { withCredentials: true });
```


- Cookieを使用している場合、 `Access-Control-Allow-Origin *` だけではダメ


```
if ($http_origin = ''){
        set $http_origin "*";
}

add_header P3P "CP=\"UNI CUR OUR\"";
add_header Access-Control-Allow-Origin $http_origin always;
add_header Access-Control-Allow-Credentials true always;
add_header Access-Control-Allow-Methods "POST, GET, PUT, DELETE, OPTIONS" always;
add_header Access-Control-Allow-Headers "Origin, Authorization, Accept" always;

if ($request_method = OPTIONS ) {
        add_header Access-Control-Allow-Origin $http_origin always;
        add_header Access-Control-Allow-Methods "POST, GET, PUT, DELETE, OPTIONS" always;
        add_header Access-Control-Allow-Headers "Origin, Authorization, Accept" always;
        add_header Access-Control-Allow-Credentials true always;
        add_header Content-Length 0;
        add_header Content-Type text/plain;
        return 200;
 }
```

```
server {
    listen      80;
    server_name hoge.example.com;

    location / {
        if ($http_origin ~* (https?://.*\.example\.(net|jp)?$)) {
            set $cors "1";
        }

        if ($cors = "1") {
            add_header Access-Control-Allow-Origin $http_origin always;
            add_header Access-Control-Allow-Headers 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since';
            add_header Access-Control-Allow-Methods 'POST, GET, OPTIONS';
            add_header Access-Control-Allow-Headers 'Origin, Authorization, Accept';
            add_header Access-Control-Allow-Credentials true;
        }
    }
}
```
