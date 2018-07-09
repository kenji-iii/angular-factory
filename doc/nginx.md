# nginx

## cors設定
  
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
