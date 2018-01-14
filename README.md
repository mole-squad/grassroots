# grassroots

## Installation

```
brew install yarn
```

### Server
```
cd server
yarn install
yarn global add nodemon
yarn start
```

### Client
```
cd client
yarn install
yarn global add webpack-dev-server
yarn start
```

### Environment config
The server relies on a local environment file called `server/.env`.

Changes to this file should be passed around direction. It should never be checked into version control.