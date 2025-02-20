import { Router, Request, Response, NextFunction } from "express";
import CatCont from "../controller/CatCont";

const Catrouter = Router();
const contCat = new CatCont();

Catrouter.get("/listAll", async (req: Request, res: Response, next:NextFunction) => {
    await contCat.handleListAll(req, res, next);
});

export default Catrouter;