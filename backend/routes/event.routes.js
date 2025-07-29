import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import {  auth } from "../middleware/admin.auth.js";
import { creatProduct, deleteProduct, listProduct, updateProduct } from "../controller/event.controller .js";
const productRouter=Router()
productRouter.post("/add", upload.single("image"),creatProduct)
productRouter.get("/get",listProduct)
productRouter.delete("/remove/:eventId",deleteProduct)
productRouter.put("/edit/:eventId", upload.single("image"),updateProduct)


export default productRouter