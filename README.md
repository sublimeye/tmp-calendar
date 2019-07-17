### Comments

* Even nowadays I don't have favorite styling library for React
* Outdated React / no hooks
* Start pack does not support Node > 9
* I should've started the boilerplate from scratch; having issues with 
React Router
* use state management library to fetch titles and propagate them
* better organize "services", have a separate API service that can handle common base prefix, and errors
* refactor application structure – usually I put components in one place and once they grow in amount I start separating them into sub folders. Although, it depends on type and size of a project
* Tried to make Calendar component independent from the data it needs to render
* Error handling (API errors handling, UI errors handling)
* In real application data would be fetched by months (if payload size is appropriate). 
Another alternative is to load "hot/top" titles for each day in a month and lazily load other on background.
This depends on the use case of the calendar UX
* Server side services would've been structured differently if it was a real app
 

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
