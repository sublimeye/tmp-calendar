## Tradeoffs
* did not use state management library (wouldn't help much, just saying)
* application structure: still tried to keep it not in one folder /
  file; I think server side suffered a bit more; Some functions /
  helpers should be moved outside of services;
* app structure -> usually I have helper services for API, Errors,
  Loggers
* more tests: data transformation on the server (filtering, mapping,
  etc). React Components (usually when some advanced logic is involved
  in rendering)
* I would spend more time on polishing animations and transitions. Would
  made them fluid between states
* After I added "paginated/per-month" data loading - navigation between
  months slowed down. I would spend more time on that.
* Did not spent much time for error handling (did some basic.. kinda,
  but it definitely does not feel solid) 
* I would definitely try to "combined" TS types between client and
  server sides; Ideally generate types on the client based on Graphql
  schema (We're doing this on one of the projects – this method is
  extremely convenient and help prevent errors)
* Another thing that I would've done differently is cache fetched titles
  and re-use them instead of re-fetching

## Notes
* Even nowadays I don't have a favorite styling library for React; Most
  of all I enjoyed built-in React Native styles. Worked nice, type-safe;
  Easy to compose; Tried styled-components/emotion/cssmodules/scss/bem –
  I think CSS in JS is better a bit (because of type safety - if
  exists). But I haven't done a lot of heavy animations/transitions
* I spent some time with adjusting the boilerplate for my needs (That's
  okay, I like it). Only later noticed that React version is outdated,
  hooks are not supported (can't say I like them a lot, though)
* The boilerplate has issues with Node > 9 (mine was 11 and I had to
  switch back to 9, one of deps is stupid^w didn't allow to move
  further)
* Because of outdated React couldn't use the latest React Router (not
  that I needed the latest, just spent another extra time figuring out
  what's going on :) )
* I definitely spent more than 6 hours on this (sorry). I think I was
  spending too much attention to initial project setup /
  re-configuration and other "not as much" related things. Also, by
  working a little extra on this task I was able to come up with some
  refactoring/optimization ideas along the way. Usually I do much better
  when I have time to "sleep on it" :)

## Considerations / Decisions
* Tried to make Calendar component independent from the data it renders;
  Although right now it would be impossible to stylize calendar day cell
  based on the data; Can be fixed by allowing to render whole cell
* I wasn't sure what was meant by: "Figure out a client-side algorithm
  for title launch placement within the calendar cells" – At first I was
  thinking about UX/UI part of this. Of how to fit a lot of titles in
  one day. Actually I though that there are might be thousands of titles
  per month, but then convinced myself that it's amount per year and on
  average it should be around 10 per day. I was thinking of adding some
  "expandable view" for the day or fuzzy search to find specific titles
  by name, but was afraid that I stuck for another day and didn't want
  to spend too much time on this.
* I was thinking how else data fetching could be optimized: in general
  it depends on UX and requirements for the calendar - or even main
  purpose. Some alternatives would be to fetch just some "top" or "hot"
  items and count of items per day. This way it is possible ot load less
  data initially and load extra on background
* Prefetch prev/next months (depends on usage) 

## How to setup and run the app

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
