import UserService from "../service/UserService";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt"

export default class UserController{
    private UserService: UserService
    constructor(){
        this.UserService = new UserService()
    }
    async HandleCreateUser(req: Request, res: Response, next:NextFunction){
        const {email, name, password} = req.body
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        try {
            const create = await this.UserService.create({email, name, password:hashedPassword})
            return res.status(201).send(create)
        } catch (error) {
            next(error)
        }
    }
    async HandleFindUser(req:Request, res:Response, next:NextFunction){
        const {email} = req.body
        try {
            const find = await this.UserService.findByEmail(email)
            return res.status(200).send(find)
        } catch (error) {
            next(error)
        }
    }
}