import CatServ from "../modules/category/service/CatServ";
import CatRepo from "../modules/category/repository/CatRepo";
import { ICat } from "../modules/category/model/CatModel";

jest.mock("../modules/category/repository/CatRepo")

describe("CatService", ()=>{
    let CatService: CatServ;
    let mockRepo: jest.Mocked<CatRepo>

    beforeEach(() => {
        mockRepo = new CatRepo() as jest.Mocked<CatRepo>;
        CatService = new CatServ();
        (CatService as any).CatRepo = mockRepo; 
    });
    it("deve listar todas as categorias", async () => {
        const Mockcat: ICat[] = [{title: "estudo"}, {title:"Exercicio"}]
        mockRepo.ListAllCat.mockResolvedValue(Mockcat)
        
        const result = await CatService.ListAllCat()

        expect(result).toEqual(Mockcat)
    })
    it("deve retornar null se não encontrar nenhuma categoria", async () => {
        mockRepo.ListAllCat.mockResolvedValue(null)

        const result = await CatService.ListAllCat()

        expect(result).toEqual(null)
    })
})