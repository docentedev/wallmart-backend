# Wallmart Backend

[![docentedev](https://circleci.com/gh/docentedev/wallmart-backend/tree/main.svg?style=svg)](https://circleci.com/gh/docentedev/wallmart-backend)
[![codecov](https://codecov.io/gh/docentedev/wallmart-backend/branch/main/graph/badge.svg?token=KMAHZ7P48O)](https://codecov.io/gh/docentedev/wallmart-backend)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Backend Service to Wallmart Test

[Demo Project](https://young-reef-62489.herokuapp.com/api/v1/discounts)

## Init project

1. Install dependencies with `npm install`
2. Define env vars

    ```env
    PORT=<number port>
    DATABASE_URL=mongodb+srv://mongo-user:password@cluster/wallmart?retryWrites=true&w=majority
    ```

3. Start:
   - Devserver `npm run dev`
   - Docker `docker-compose -f "docker-compose.yml" up -d --build`

## Run Test & Integration Test

- `npm run test`

## Deploy on Heroku

- heroku container:push web -a young-reef-62489
- heroku container:release web -a young-reef-62489

## API Endpoints

- [healthcheck](https://young-reef-62489.herokuapp.com/health)
- [products](https://young-reef-62489.herokuapp.com/api/v1/products)
- [discoints](https://young-reef-62489.herokuapp.com/api/v1/discounts)

## Repository url

[Repo](https://github.com/docentedev/wallmart-devserver)

## DB Access

[go to db](https://cloud.mongodb.com/v2/6000dfe0eed5cd04c5b1ef72#clusters)
