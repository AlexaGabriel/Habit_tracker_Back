import HabServ from "../service/HabServ";
import { Request, Response, NextFunction } from "express";

export default class HabControl{
    private habserv:HabServ
    constructor(){
        this.habserv = new HabServ()
    }
    async handleCreateHabit(req:Request, res:Response, next:NextFunction){
        const {title, description, frequency, catId, ownerId } = req.body
        try {
            const create = this.habserv.create({title, description, frequency, catId, ownerId});
            return res.status(201).send(create);
        } catch (error) {
            next(error)           
        }
    }
    async handleListAllHabit(req:Request, res:Response, next:NextFunction){
        const {userId} = req.body
        try {
            const list = this.habserv.listAll(userId);
            return res.status(201).send(list)
        } catch (error) {
            next(error)
        }
    }
    async handleListHabit(req:Request, res:Response, next:NextFunction){
        const {id} = req.body
        try {
            const list = this.habserv.listAll(id);
            return res.status(201).send(list)
        } catch (error) {
            next(error)
        }
    }
    async handleUpdateHabit(req:Request, res:Response, next:NextFunction){
        const {title, description, frequency, catId, ownerId } = req.body
        const {id} = req.params
        try {
            const create = this.habserv.update({title, description, frequency, catId, ownerId}, id);
            return res.status(201).send(create);
        } catch (error) {
            next(error)           
        }
    }
    async handleDeletHabit(req:Request, res:Response, next:NextFunction){
        const {id} = req.params
        try {
            const list = this.habserv.delete(id);
            return res.status(201).send(list)
        } catch (error) {
            next(error)
        }
    }
}