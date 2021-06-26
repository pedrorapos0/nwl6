import { getCustomRepository } from "typeorm";
import Compliment from "../entites/Compliment";
import ComplimentRepository from "../repositories/ComplimentRepository";




class FindUserSenderCompliments {

    public async execute(user_id: string): Promise<Compliment[]> {

   
        const complimentRepository = getCustomRepository(ComplimentRepository);
        const compliments = await complimentRepository.find({where :{user_sender: user_id}});

        return compliments;

    }

}

export default FindUserSenderCompliments;