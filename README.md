# vue-pokemon
[![Build Status](https://travis-ci.org/denlb/vue-pokemon.svg?branch=master)](https://travis-ci.org/denlb/vue-pokemon)

Vue.js list-detail SPA using GraphQL endpoint


<img src="https://user-images.githubusercontent.com/7160998/64905474-a114ee80-d6e1-11e9-8895-3a0a99fcfad4.png" width="400">

<a href="https://github.com/lucasbento/graphql-pokemon">lucasbento/graphql-pokemon</a> was used as a Graphql endpoint.

## Project start

Using docker-compose:
```bash
docker-compose up
```

Or using docker:
```bash
docker build -t denlb/vue-pokemon .
docker run -p 127.0.0.1:8080:8080 denlb/vue-pokemon
```

The application will be running on http://localhost:8080

## Run tests

Using docker-compose
```bash
docker-compose exec --rm web npm run test:unit
```

Or using docker:
```bash
docker run -e CI=true denlb/vue-pokemon npm run test:unit
```
