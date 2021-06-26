import {Request, Response} from 'express';
import CreateUserService from '../service/CreateUserService';
import FindAllUserService from '../service/FindAllUserService';
import {classToClass} from 'class-transformer'


class UserController {

    public async create(request: Request, response: Response): Promise<Response> {
        const {name, email, password, admin} = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, password, admin});
        return response.json(user);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const userService = new FindAllUserService();
        const users = await userService.execute();
        return response.json(classToClass(users));
    }

}

export default UserController;