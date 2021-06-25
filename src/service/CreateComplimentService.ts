import { getCustomRepository } from "typeorm";
import Compliment from "../entites/Compliment";
import AppError from "../error/AppError";
import ComplimentRepository from "../repositories/ComplimentRepository";
import TagsRepository from "../repositories/TagsRepository";
import UsersRepositories from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {

    public async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest): Promise<Compliment> {

        const userRepository = getCustomRepository(UsersRepositories);
        const tagRepository = getCustomRepository(TagsRepository);
        const complimentRepository = getCustomRepository(ComplimentRepository);

        if (user_sender === user_receiver) {
            throw new AppError('Não pode enviar elogio para você mesmo!');
        }

        const userReceiverExist = await userRepository.findOne(user_receiver);

        if(!userReceiverExist) {
            throw new AppError('Usuário que recebe o elogio é inexistente!');
        }

        const tagExist = await tagRepository.findOne(tag_id);

        if(!tagExist) {
            throw new AppError('Tag inexistente!');
        }

        const compliment = complimentRepository.create({tag_id, user_sender, user_receiver, message});

        await complimentRepository.save(compliment);

        return compliment;

    }

}

export default CreateComplimentService;