import { Request, Response, Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

// router.get("/teste", (req: Request, res: Response) => {
//   return res.json({ ok: true });
//   // throw new Error('teste')
// });

// Rotas User

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);


export { router };
