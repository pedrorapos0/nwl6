import {Request, Response} from 'express';

import AuthenticateUserService from '../service/AuthenticateUserService';

class SessionController {

    public async create(request:Request, response: Response): Promise<Response> {
        const {email, password} = request.body;
        const authenticateUserServicession = new AuthenticateUserService();

        const token = await authenticateUserServicession.execute({email, password});

        return response.json(token);
    }
}

export default SessionController;