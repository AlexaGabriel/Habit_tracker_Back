export interface IUser{
    email: string
    name: string
    password: string
}

export interface IUserRepo{
    create(data:IUser): Promise<IUser>
    findByEmail(email: string): Promise<IUser>
}