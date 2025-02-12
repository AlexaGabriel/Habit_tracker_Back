import { IUser, IUserRepo } from "../model/UserModel";
import UserRepo from "../repository/UserRepo";
import { SUser } from "../schema/UserSch";

export default class UserService implements IUserRepo{
    private repository: UserRepo
    constructor(){
        this.repository = new UserRepo()
    }
    async create(data: IUser): Promise<IUser> {
        const validate = SUser.safeParse(data)
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(errorMessages)
        }
        return await this.repository.create(data)
    }
    async findByEmail(email: string): Promise<IUser | null> {
        return await this.repository.findByEmail(email)
    }
    
}