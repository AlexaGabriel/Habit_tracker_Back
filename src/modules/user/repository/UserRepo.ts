import { prisma } from "../../../config/prisma";
import { IUser, IUserRepo } from "../model/UserModel";

class ConflictError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.name = "ConflictError";
        this.statusCode = 409;
    }
}
export default class UserRepo implements IUserRepo{
    async create(data: IUser): Promise<IUser> {
        
        const existingUser = await prisma.user.findUnique({
            where:{
                name:data.name
            }
        }) 
        const existingEmail = await prisma.user.findUnique({
            where:{
                email:data.email
            }
        }) 
        if(existingUser){
            throw new ConflictError("Username already exists")
        }else if(existingEmail){
            throw new ConflictError("Email already exists")
        }
        const res = await prisma.user.create({
            data
        })
        
        return res
    }
    
    async findByEmail(email: string): Promise<IUser| null> {
        const res = await prisma.user.findUnique({
            where:{
                email:email
            }
        });
        return res
    }
     
}