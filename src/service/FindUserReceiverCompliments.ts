import { getCustomRepository } from "typeorm";
import Compliment from "../entites/Compliment";
import ComplimentRepository from "../repositories/ComplimentRepository";




class FindUserReceiverCompliments {

    public async execute(user_id: string): Promise<Compliment[]> {

   
        const complimentRepository = getCustomRepository(ComplimentRepository);
        const compliments = await complimentRepository.find({where :{user_receiver:user_id}});

        return compliments;

    }

}

export default FindUserReceiverCompliments;