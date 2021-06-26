import { getCustomRepository } from "typeorm";

import User from "../entites/User";
import UsersRepositories from "../repositories/UsersRepositories";



class FindAllUserService {


    public async execute(): Promise<User[]> {

        const userRepository = getCustomRepository(UsersRepositories);

        const users = await userRepository.find();

      return users;
    }

}

export default FindAllUserService;