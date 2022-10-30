# Express tutorial

<pre>
├── README.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── routes
│   └── user.js
├── server.js
└── views
    └── index.ejs
</pre>

## 忘備録
- scriptでserver.jsを起点にサーバー起動
- server.js内でルーティングしているが下層ディレクトリはroutesで制御
- HTMLとejsでディレクトリ（publicとviews）を分けている