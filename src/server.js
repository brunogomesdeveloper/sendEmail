const app = require("./app");
require('dotenv').config()

const port  = process.env.PORT

app.listen(port, () => {
    console.log(`---------------------------------`)
    console.log(`Send email listening `)
    console.log(`Port: ${port}`)
    console.log(`http://localhost:${port}`)
    console.log(`---------------------------------`)
  })
  