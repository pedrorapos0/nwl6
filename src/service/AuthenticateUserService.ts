import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import auth from '../config/auth';
import AppError from '../error/AppError';
import UsersRepositories from '../repositories/UsersRepositories';

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    public async execute({ email, password}: IAuthenticateRequest): Promise<string> {

        const useRepository = getCustomRepository(UsersRepositories);

        const user = await useRepository.findOne({email});

        if(!user){
            throw new AppError('email ou senha inválido!', 401);

        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new AppError('email ou senha inválido!', 401);
        }

        const {secret, expiresIn} = auth.jwt;

        
            const token = sign({email: user.email}, secret, {
                subject: user.id,
                expiresIn,
            } ); 

            return token;
       

    }

}

export default AuthenticateUserService;