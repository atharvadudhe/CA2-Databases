import express from "express";
import { POST, GET, PUT, DELETE } from "../controller/controller.js";

const route = express.Router();

route.post('/post', POST);
route.get('/get', GET);
route.put('/update/:id', PUT);
route.delete('/delete/:id', DELETE);

export default route;