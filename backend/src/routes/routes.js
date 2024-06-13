import express from "express";
import { gptController } from "../controllers/gptController.js";
import { ollamaController } from "../controllers/ollamaController.js";
import { productCase } from "../controllers/productsController.js";

export const routPath = new express.Router();

routPath.post("/chatgpt", gptController);
// routPath.post("/ollama", ollamaController);

routPath.post("/products", productCase);
