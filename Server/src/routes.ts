import { Request, Response, Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

// router.get("/teste", (req: Request, res: Response) => {
//   return res.json({ ok: true });
//   // throw new Error('teste')
// });

// Rotas User

router.post('/users', new CreateUserController().handle)


export { router };
