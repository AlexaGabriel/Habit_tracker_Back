import { IHabit, IHabitRepo } from "../model/HabModel";
import { prisma } from "../../../config/prisma";

export default class HabRepo implements IHabitRepo{
    async create(data: IHabit): Promise<IHabit> {
        const res = await prisma.habit.create({
            data:{
                title: data.title,
                description: data.description,
                frequency: data.frequency,
                catId: data.catId,
                ownerId: data.ownerId
            }
        });
        return res
    }

    async listAll(Userid: string): Promise<IHabit[] | null> {
        const res = await prisma.habit.findMany({
            where:{ownerId:Userid}
      });
        return res
    }

    async list(id: string): Promise<IHabit | null> {
        const res = await prisma.habit.findUnique({
            where:{
                id
            }
        });
        return res
    }
    async update(data: IHabit, id: string): Promise<IHabit> {
        const res = await prisma.habit.update({
            where:{
                id
            },
            data
        });
        return res
    }
    async delete(id: string): Promise<IHabit> {
        const res = await prisma.habit.delete({
            where:{
                id
            }
        });
        return res
    }

}