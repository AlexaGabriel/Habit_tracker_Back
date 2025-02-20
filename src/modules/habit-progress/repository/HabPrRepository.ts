import { prisma } from "../../../config/prisma";
import { IHabProg, IHabProgRepo } from "../model/HabPrModel";

export default class HabPrRepo implements IHabProgRepo{
    async create(data: IHabProg): Promise<IHabProg> {
        const create = await prisma.habit_Progress.create({
            data:data
        });
        return create
    }
    async listAll(habitId: string): Promise<IHabProg[]| null> {
        const list = await prisma.habit_Progress.findMany({
            where:{
                habitId:habitId
            } 
        });
        return list 
    }
    async listId(id: string): Promise<IHabProg> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<IHabProg> {
        throw new Error("Method not implemented.");
    }
    
}