const mongoose = require("mongoose");
const URI = "mongodb://localhost/jltech_db";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log(`Database ${db.connection.name} is connected in server.`)
  )
  .catch((error) => console.log(error1));
