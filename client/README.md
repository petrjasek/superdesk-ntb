# How to start the client in dev mode

After installation via:

```sh
$ npm install
```

you can start the client dev server:

```sh
$ npm run build
$ npm run server
```

now the client dev server should be running on http://localhost:9000.

With that you can start rebuilding of the extension. In the widget folder `ntb/extensions/auto-tagging-widget/` folder run:

```sh
$ npm start watch
```

and now any changes in the extension will auto rebuild an reload the client.
