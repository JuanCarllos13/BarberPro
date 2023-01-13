import { Request, Response } from "express";
import { CountHairCutService } from "../../services/haircut/CountHairCutService";

class CountHairCutController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id

    const countHairCut = new CountHairCutService()

    const count = await countHairCut.execute({
      user_id
    })

    return response.json(count)

  }
}


export {CountHairCutController}