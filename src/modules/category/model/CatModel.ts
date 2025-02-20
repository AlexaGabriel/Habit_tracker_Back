export interface ICat{
    title: String
}

export interface ICatRepo{
    ListAllCat():Promise<ICat[]|null>
}