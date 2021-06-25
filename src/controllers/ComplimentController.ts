import { Request, Response } from "express";
import CreateComplimentService from "../service/CreateComplimentService";


class ComplimentController {

    public async create(request: Request, response: Response ): Promise<Response> {
        const {tag_id, user_sender, user_receiver, message} = request.body;
        const complimentService = new CreateComplimentService();
        const compliment = await complimentService.execute({tag_id, user_sender, user_receiver, message});
        return response.json(compliment);
    }

}

export default ComplimentController;