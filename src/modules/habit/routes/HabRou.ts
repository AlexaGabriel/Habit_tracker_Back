import { Router, Request, Response, NextFunction } from "express";
import HabControl from "../controller/HabContro";

const Habrouter = Router();
const contHab = new HabControl();

Habrouter.post("/create", async (req: Request, res: Response, next:NextFunction) => {
    await contHab.handleCreateHabit(req, res, next);
});
Habrouter.get("/ListAll", async (req: Request, res: Response, next:NextFunction) => {
    await contHab.handleListAllHabit(req, res, next);
});
Habrouter.get("/ListHabit", async (req: Request, res: Response, next:NextFunction) => {
    await contHab.handleListHabit(req, res, next);
});
Habrouter.put("/UpdateHabit/:id", async (req: Request, res: Response, next:NextFunction) => {
    await contHab.handleUpdateHabit(req, res, next);
});
Habrouter.delete("/DeleteHabit/:id", async (req: Request, res: Response, next:NextFunction) => {
    await contHab.handleDeletHabit(req, res, next);
});


export default Habrouter;