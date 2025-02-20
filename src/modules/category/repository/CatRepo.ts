import { prisma } from "../../../config/prisma";
import { ICat, ICatRepo } from "../model/CatModel";

export default class CatRepo implements ICatRepo{
    async ListAllCat(): Promise<ICat[]|null> {
        return await prisma.category.findMany()
    }
}