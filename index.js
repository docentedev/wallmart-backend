require('dotenv').config()
const server = require('./src/server')

server.listen(process.env.PORT || 3001, () => console.log(process.env.PORT || 3001))