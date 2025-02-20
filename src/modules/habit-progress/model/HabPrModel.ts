export interface IHabProg{
    complete: boolean
    date: Date
    habitId: string
}

export interface IHabProgRepo{
    create(data: IHabProg): Promise<IHabProg>
    listAll(habitId:string): Promise<IHabProg[]|null>
    listId(id: string): Promise<IHabProg>
    delete(id: string): Promise<IHabProg>
}
