import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authUserService = new AuthUserService();

    const session = await authUserService.execute({
      email: email,
      password: password,
    });

    return response.json(session);
  }
}

export { AuthUserController };
