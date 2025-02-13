import CatServ from "../service/CatServ";
import { Request, Response, NextFunction } from "express";

export default class CatCont{
    private CatServ:CatServ
    constructor(){
        this.CatServ = new CatServ()
    }
    async handleListAll(req: Request, res:Response, next: NextFunction){
        try {
           return res.status(200).send(await this.CatServ.ListAllCat())
        } catch (error) {
            next(error)
        }
    }
}
