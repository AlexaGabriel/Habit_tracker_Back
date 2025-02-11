import { prisma } from "../../../config/prisma";
import { IUser, IUserRepo } from "../model/UserModel";

export default class UserRepo implements IUserRepo{
    create(data: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    findByEmail(email: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
     
}