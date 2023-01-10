import { Request, Response } from "express";
import { CreateHairCutService } from "../../services/haircut/CreateHairCutSerivce";

class CreateHairCutController {
  async handle(request: Request, response: Response) {
    const { name, price } = request.body;
    const user_id = request.user_id;

    const createHaircutService = new CreateHairCutService();

    const haircut = await createHaircutService.execute({
      name,
      price,
      user_id,
    });

    return response.json(haircut);
  }
}

export { CreateHairCutController };
