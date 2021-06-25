import {getCustomRepository} from 'typeorm';

import Tag from "../entites/Tag";
import TagsRepository from '../repositories/TagsRepository';
import AppError from '../error/AppError';

interface ITagRequest {
    name: string;
}

class CreateTagService {


    public async execute({name}: ITagRequest): Promise<Tag> {
        const tagRepository = getCustomRepository(TagsRepository);

        if(!name) {
            throw new AppError('Nome da tag é obrigatório', 400);
        }
        const tagAlreadyExist =  await tagRepository.findOne({name});
       
        if(tagAlreadyExist){
            throw new AppError('Nome da tag já existe!', 400);
        }

        const tag = tagRepository.create({name});

        await tagRepository.save(tag);

        return tag;
    }
}

export default CreateTagService;