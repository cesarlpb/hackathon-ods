import express, { json, urlencoded } from "express";
import cors from "cors";
import { routPath } from "./routes/routes.js";

const PORT = 3000;

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(routPath)

app.listen(PORT, () => {
  console.log(`🔥Server in localhost:${PORT}`);
});
