import { Request, Response } from "express";
import CreateComplimentService from "../service/CreateComplimentService";
import FindUserReceiverCompliments from "../service/FindUserReceiverCompliments";
import FindUserSenderCompliments from "../service/FindUserSenderCompliments";

class ComplimentController {

    public async create(request: Request, response: Response ): Promise<Response> {
        const {tag_id, user_sender, user_receiver, message} = request.body;
        const complimentService = new CreateComplimentService();
        const compliment = await complimentService.execute({tag_id, user_sender, user_receiver, message});
        return response.json(compliment);
    }

    public async showReceiveCompliment(request: Request, response: Response ): Promise<Response> {
        const user_id = request.user_id;
        const complimentService = new FindUserReceiverCompliments();
        const compliments = await complimentService.execute(user_id);
        return response.json(compliments);
    }

    public async ShowSenderCompliment(request: Request, response: Response ): Promise<Response> {
        const user_id = request.user_id;
        const complimentService = new FindUserSenderCompliments();
        const compliments = await complimentService.execute(user_id);
        return response.json(compliments);
    }


}

export default ComplimentController;