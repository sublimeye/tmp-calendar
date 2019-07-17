### Comments

* Even nowadays I don't have favorite styling library for React
* Outdated React / no hooks
* Start pack does not support Node > 9

This is a simple directory structure wrapped around create-react-app-typescript,
which also includes a node server. You can run everything by doing:

```sh
yarn install
yarn run start
```

This builds create-react-app-typescript, and proxies requests to the node server. Any changes
to the client will be handled by create-react-app and you still get hot module reloading.

Any changes to the server will cause the server to restart so you can test API changes.

Run tests for client & server:

```sh
yarn run test
```

To deploy your app to heroku:

```sh
heroku login
heroku create
```

Then, update client/package.json's "homepage" property to be the name of your heroku
URL. Finally:

```sh
yarn deploy
```
