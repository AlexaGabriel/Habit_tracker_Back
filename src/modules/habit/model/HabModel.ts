export interface IHabit{
    title: string
    description: string
    frequency: boolean
}
export interface IHabitRepo{
    create(data:IHabit, UserId:string): Promise<IHabit>
    listAll(Userid:string): Promise<IHabit|null>
    list(id:string): Promise<IHabit|null>
    update(data:IHabit, id:string): Promise<IHabit>
    delete(id:string): Promise<IHabit>
}