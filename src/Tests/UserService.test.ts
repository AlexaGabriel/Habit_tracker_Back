import UserService from "../modules/user/service/UserService";
import UserRepo from "../modules/user/repository/UserRepo";
import { IUser } from "../modules/user/model/UserModel";

jest.mock("../modules/user/repository/UserRepo"); 

describe("UserService", () => {
    let userService: UserService;
    let mockRepo: jest.Mocked<UserRepo>;

    beforeEach(() => {
        mockRepo = new UserRepo() as jest.Mocked<UserRepo>;
        userService = new UserService();
        (userService as any).repository = mockRepo; 
    });

    it("deve criar um usuário com dados válidos", async () => {
        const mockUser: IUser = {name: "Alex", email: "alex@email.com", password:"12345678" };
        mockRepo.create.mockResolvedValue(mockUser); 

        const result = await userService.create(mockUser);

        expect(result).toEqual(mockUser);
        expect(mockRepo.create).toHaveBeenCalledWith(mockUser);
    });

    it("deve falhar ao criar um usuário com dados inválidos", async () => {
        const invalidUser = { email: "alexemail.com", name:"Al", password:"212" }; // Sem nome

        await expect(userService.create(invalidUser as any)).rejects.toThrow();

        expect(mockRepo.create).not.toHaveBeenCalled();
    });

    it("deve buscar um usuário pelo e-mail", async () => {
        const mockUser: IUser = { name: "Alex", email: "alex@email.com", password:"12345678" };
        mockRepo.findByEmail.mockResolvedValue(mockUser);

        const result = await userService.findByEmail("alex@email.com");

        expect(result).toEqual(mockUser);
        expect(mockRepo.findByEmail).toHaveBeenCalledWith("alex@email.com");
    });

    it("deve retornar null se usuário não for encontrado", async () => {
        mockRepo.findByEmail.mockResolvedValue(null);

        const result = await userService.findByEmail("notfound@email.com");

        expect(result).toBeNull();
    });
});
