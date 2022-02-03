const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./database");

const app = express();

app.set("port", 4000);

/** Middlewares */

/** Create a static folder add a virtual prefix to this directory. With __dirname we create a absolute path to this directory. */
app.use("/public/", express.static(__dirname + "/storage/"));

/**  Parse incoming requests with urlencoded payloads */
app.use(express.urlencoded({ extended: true }));

/**  Parse incoming requests with JSON payloads */
app.use(express.json());

/** Cross-Origin Resource Sharing. Enable share resources between two domains/servers. */
app.use(cors({ origin: "*" }));

/**  HTTP request logger */
app.use(morgan("dev"));

// app.use("/user", require("./routes/user.route"))

/** Run server */
app.listen(app.get("Port"), () => {
  console.log(`Server running in ${app.get("port")} port.`);
});
