import CatRepo from "../repository/CatRepo";
import { ICat, ICatRepo } from "../model/CatModel";

export default class CatServ implements ICatRepo{
    private CatRepo: CatRepo
    constructor(){
        this.CatRepo = new CatRepo()
    }

    async ListAllCat(): Promise<ICat[]|null> {
        return await this.CatRepo.ListAllCat()
    }
    
}