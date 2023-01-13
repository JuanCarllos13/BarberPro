import { Request, Response } from "express";
import { NewScheduleService } from "../../services/schedule/NewScheduleService";

class NewScheduleController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;
    const { haircut_id, customer } = request.body;

    const newSchedule = new NewScheduleService();

    const schedule = await newSchedule.execute({
      user_id,
      customer,
      haircut_id,
    });

    return response.json(schedule);
  }
}

export { NewScheduleController };
