import {Request, Response} from 'express';
import CreateTagService from '../service/CreateTagService';

class TagController {


    public async create(request: Request, response: Response): Promise<Response> {
        const {name} = request.body;

        const tagService = new CreateTagService();
        const tag = await tagService.execute({name});

        return response.json(tag);

    }

}

export default TagController;