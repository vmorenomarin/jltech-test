require("dotenv").config();
const mongoose = require("mongoose");
URI=process.env.MONGO_URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log(`Database ${db.connection.name} is connected in server.`)
  )
  .catch((error) => console.log(error));
