import { EntityRepository, Repository } from 'typeorm';
import Compliment from '../entites/Compliment';

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment> {

}

export default ComplimentRepository;