import HabRepo from "../repository/HabRepo";
import { IHabit, IHabitRepo } from "../model/HabModel";
import { SHab } from "../../../config/Schema";

export default class HabServ implements IHabitRepo{
    private habrepo:HabRepo
    constructor(){
        this.habrepo = new HabRepo()
    }

    create(data: IHabit): Promise<IHabit> {
        const validate = SHab.safeParse(data);
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(errorMessages)
        }
        return this.habrepo.create(data);
    }
    listAll(Userid: string): Promise<IHabit[] | null> {
        return this.habrepo.listAll(Userid);
    }
    list(id: string): Promise<IHabit | null> {
        return this.habrepo.list(id);
    }
    update(data: IHabit, id: string): Promise<IHabit> {
        const validate = SHab.safeParse(data);
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(errorMessages)
        }
        return this.habrepo.update(data, id);
    }
    delete(id: string): Promise<IHabit> {
        return this.habrepo.delete(id)
    }
    
}