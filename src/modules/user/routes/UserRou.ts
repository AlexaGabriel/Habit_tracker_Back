import { Router, Request, Response, NextFunction } from "express";
import UserController from "../controller/UserCont";

const Userrouter = Router();
const contUser = new UserController();

Userrouter.post("/create", async (req: Request, res: Response, next:NextFunction) => {
    await contUser.HandleCreateUser(req, res, next);
});
Userrouter.get("/findByEmail", async (req: Request, res: Response) => {
    await contUser.HandleFindUser(req, res);
});

export default Userrouter;