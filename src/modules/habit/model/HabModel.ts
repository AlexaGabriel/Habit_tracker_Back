export interface IHabit{
    title: string
    description: string|null
    frequency: boolean
    catId: number
    ownerId: string
}
export interface IHabitRepo{
    create(data:IHabit): Promise<IHabit>
    listAll(Userid:string): Promise<IHabit[]|null>
    list(id:string): Promise<IHabit|null>
    update(data:IHabit, id:string): Promise<IHabit>
    delete(id:string): Promise<IHabit>
}