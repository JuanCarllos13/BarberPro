import { Router } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { CreateHairCutController } from "./controllers/hairCut/CreateHairCutController";
import { ListHairCutController } from "./controllers/hairCut/ListHairCutController";
import { UpdateHairCutController } from "./controllers/hairCut/UpdateHairCutController";

const router = Router();

// Rotas User

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);

// HAIRCUT
router.post("/haircut", isAuthenticated, new CreateHairCutController().handle);
router.get("/haircuts", isAuthenticated, new ListHairCutController().handle);
router.put("/haircut", isAuthenticated, new UpdateHairCutController().handle);

export { router };
