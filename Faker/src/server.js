import express from "express";
import emoji from "node-emoji";
import cors from "cors";

import UserRouter from "./routers/product.router.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos-test", new UserRouter());

const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(emoji.get("fire"), `Server started on port http://localhost/3000`)
);
server.on("error", (err) => console.log(err));
