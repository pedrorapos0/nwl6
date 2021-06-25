import {EntityRepository, Repository} from 'typeorm';
import Tag from '../entites/Tag';

@EntityRepository(Tag)
class TagsRepository extends Repository<Tag> {

}

export default TagsRepository;