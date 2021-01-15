# wallmart-devserver

## https://cloud.mongodb.com/v2/6000dfe0eed5cd04c5b1ef72#clusters

## Deploy on Heroku

- heroku container:push web -a young-reef-62489
- heroku container:release web -a young-reef-62489

## Web

[Web](https://young-reef-62489.herokuapp.com/)

## Repo

[Repo](https://github.com/docentedev/wallmart-devserver)

## Enviroment

define next enviroment vars

```env
MONGODB_PASSWORD=ivLmGz8opWOHyc6n
MONGODB_USER=wallmart-user
```

```js
async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */

  /*
    useUnifiedTopology: true,
    useNewUrlParser: true,
    */
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function listDatabases(client) {
  const cursor = await client.db().collection("products").find({});
  const results = await cursor.toArray();
  console.log(results);

  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}
```
