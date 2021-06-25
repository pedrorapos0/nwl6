import { getCustomRepository } from "typeorm";
import {hash} from 'bcryptjs';

import User from "../entites/User";
import UsersRepositories from "../repositories/UsersRepositories";
import AppError from '../error/AppError';

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

class CreateUserService {


    public async execute({ email, name, password, admin = false}: IUserRequest): Promise<User> {

        if(!email){
            throw new AppError('E-mail é obrigatório'); 
        }

        if(!password){
            throw new AppError('Senha é obrigatória'); 
        }

        const userRepository = getCustomRepository(UsersRepositories);

        const userAlreadyExists = await userRepository.findOne({ email});

        if(userAlreadyExists){
            throw new AppError('E-mail já cadastrado!');
        }

        const passwordHashed = await hash(password, 8);

        const user = userRepository.create({name, email, password: passwordHashed, admin});
        await userRepository.save(user);

      return user;
    }

}

export default CreateUserService;