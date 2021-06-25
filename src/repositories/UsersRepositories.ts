import {EntityRepository, Repository} from 'typeorm';
import User from '../entites/User';

@EntityRepository(User)
class UsersRepositories extends Repository<User> {

}

export default UsersRepositories;