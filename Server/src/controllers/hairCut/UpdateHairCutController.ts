import { Request, Response } from "express";
import { UpdateHairCutService } from "../../services/haircut/UpdateHairCutService";

class UpdateHairCutController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const { name, price, status, haircut_id } = request.body;

    const updateHairCut = new UpdateHairCutService();

    const haircut = await updateHairCut.execute({
      haircut_id,
      name,
      price,
      status,
      user_id,
    });

    return response.json(haircut)
  }
}

export { UpdateHairCutController };
