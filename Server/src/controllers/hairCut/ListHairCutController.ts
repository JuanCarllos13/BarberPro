import { Request, Response } from "express";
import { ListHairCutService } from "../../services/haircut/ListHairCutService";

class ListHairCutController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const status = request.query.status as string;

    const listHairCut = new ListHairCutService();

    const haircuts = await listHairCut.execute({
      user_id,
      status,
    });


    return response.json(haircuts)
  }
}

export { ListHairCutController };
