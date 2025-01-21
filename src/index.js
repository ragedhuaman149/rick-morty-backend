const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");

app.use(cors());

app.set("port", process.env.PORT || 8000);

//MIDDLEWARES
app.use(morgan("combined"));
app.use(express.urlencoded({ extends: false }));
app.use(express.json());

app.use('/characters', require('./routes/characters'))
app.use('/favorite', require('./routes/favorite'))

//Starting the Server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${8000}`);
});
