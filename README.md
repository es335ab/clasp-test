# Setting

```
$ node -v
v12.16.1
$ yarn -v
1.22.4
```

install modules

```
$ yarn
```

# Googleアカウントにログイン

```
$ yarn clasp:login
```

# Google Apps Script API の使用をonにする

- https://script.google.com/home/usersettings
- ここにアクセスしてonにする

# app idをセットする

```
$ cat .clasp.json
{
  "scriptId": "<app id>", => ココ
  "rootDir": "dist"
}
```

# Deploy

```
$ yarn clasp:push
...
Hash: 90ab749125a55395cfcf
Version: webpack 4.42.0
Time: 1269ms
Built at: 2020-05-08 16:36:31
    Asset      Size  Chunks             Chunk Names
bundle.js  5.99 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
[./src/index.ts] 274 bytes {main} [built]
[./src/util.ts] 305 bytes {main} [built]
└─ dist/appsscript.json
└─ dist/bundle.js
Pushed 2 files.
✨  Done in 11.06s.
```
