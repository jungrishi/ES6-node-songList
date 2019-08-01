import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./Routes";
import "./envConfig";

const port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", routes);
app.get("*", (err, req, res) => {
  res.send("nope");
});

app.get("/", () => {
  return res.send("Welcome to the Backend");
});

app.listen(port, () => console.log(`running on port: ${port}`));
