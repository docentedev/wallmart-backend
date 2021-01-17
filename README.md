# wallmart-devserver

[![docentedev](https://circleci.com/gh/docentedev/wallmart-backend/tree/main.svg?style=svg)](https://circleci.com/gh/docentedev/wallmart-backend)

Backend Service to Wallmart Test

Install dependencies with `npm install`

## Deploy on Heroku

- heroku container:push web -a young-reef-62489
- heroku container:release web -a young-reef-62489

## Web

[healthcheck](https://young-reef-62489.herokuapp.com/health)

### api v1

[products](https://young-reef-62489.herokuapp.com/api/v1/products)

[discoints](https://young-reef-62489.herokuapp.com/api/v1/discounts)


## NPM scripts

- start `npm run dev`
- test `npm run test`

## Repo

[Repo](https://github.com/docentedev/wallmart-devserver)

## DB Access

[go to db](https://cloud.mongodb.com/v2/6000dfe0eed5cd04c5b1ef72#clusters)

## Enviroment

define next enviroment vars

```env
PORT=<number port>
DATABASE_URL=mongodb+srv://mongo-user:password@cluster/wallmart?retryWrites=true&w=majority
```
