import HabServ from "../modules/habit/service/HabServ";
import HabRepo from "../modules/habit/repository/HabRepo";
import { IHabit } from "../modules/habit/model/HabModel";

jest.mock("../modules/habit/repository/HabRepo")

describe("HabService", ()=>{
    let HabService: HabServ;
    let mockRepo: jest.Mocked<HabRepo>

    beforeEach(() => {
        mockRepo = new HabRepo() as jest.Mocked<HabRepo>;
        HabService = new HabServ();
        (HabService as any).habrepo = mockRepo; 
    });

    it("deve criar um Hábito com dados válidos", async () => {
            const mockHab: IHabit = {title:"estudar", frequency:true, description:"estudar inglês todos os dias", catId:1, ownerId:"osda"};
            mockRepo.create.mockResolvedValue(mockHab)
    
            const result = await HabService.create(mockHab)
    
            expect(result).toEqual(mockHab);
            expect(mockRepo.create).toHaveBeenCalledWith(mockHab);
        });
    

    it("deve listar todos os habitos", async () => {
        const mockHab: IHabit[] = [{title:"estudar", frequency:true, description:"estudar inglês todos os dias", catId:1, ownerId:"osda"}]
        mockRepo.listAll.mockResolvedValue(mockHab)
        const userid = "olámundo"
        
        const result = await HabService.listAll(userid)

        expect(result).toEqual(mockHab)
    })
    it("deve retornar null se não encontrar nenhum habito", async () => {
        mockRepo.listAll.mockResolvedValue(null)
        const userid = "olámundo"
        const result = await HabService.listAll(userid)

        expect(result).toEqual(null)
    })
    it("deve atualizar os habitos", async () => {
        const id = "2dldksk"
        const antigo = {title:"estudar", frequency:true, description:"estudar inglês todos os dias", catId:1, ownerId:"osda"}
        const novo = {title:"jogar", frequency:true, description:"estudar inglês todos os dias", catId:1, ownerId:"osda"}

        mockRepo.update.mockResolvedValue(novo)
        const result = await HabService.update(novo , id)
        

        expect(result).not.toEqual(antigo)
        expect(mockRepo.update).toHaveBeenCalledWith(novo, id);
    })
})