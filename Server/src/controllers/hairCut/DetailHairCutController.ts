import { Request, Response } from "express";
import { DetailHairCutService } from "../../services/haircut/DetailHairCutService";

class DetailHairCutController {
  async handle(request: Request, response: Response) {
    const haircut_id = request.query.haircut_id as string;

    const detailHairCut = new DetailHairCutService();

    const hairCut = await detailHairCut.execute({
      haircut_id,
    });

    response.json(hairCut);
  }
}

export { DetailHairCutController };
