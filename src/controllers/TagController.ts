import {Request, Response} from 'express';
import CreateTagService from '../service/CreateTagService';
import FindAllTagService from '../service/FindAllTagService';

class TagController {


    public async create(request: Request, response: Response): Promise<Response> {
        const {name} = request.body;

        const tagService = new CreateTagService();
        const tag = await tagService.execute({name});

        return response.json(tag);

    }

    public async index(request: Request, response: Response): Promise<Response> {
       
        const tagService = new FindAllTagService();
        const tags = await tagService.execute();

        return response.json(tags);

    }

}

export default TagController;