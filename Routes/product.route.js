import express from "express";
import {
  postProduct,
  readPost,
  readPostById,
  updateProductById,
  deletByid,
} from "../Controller/product.controller.js";

const routes = express.Router();
routes.post("/", postProduct);
routes.get("/", readPost);
routes.get("/:id", readPostById);
routes.put("/:id", updateProductById);

routes.delete("/:id", deletByid);

export default routes;
