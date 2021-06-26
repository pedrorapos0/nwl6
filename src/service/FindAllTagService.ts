import {getCustomRepository} from 'typeorm';

import Tag from "../entites/Tag";
import TagsRepository from '../repositories/TagsRepository';



class FindAllTagService {


    public async execute(): Promise<Tag[]> {
        const tagRepository = getCustomRepository(TagsRepository);
        const tags =  await tagRepository.find();

        return tags;
    }
}

export default FindAllTagService;