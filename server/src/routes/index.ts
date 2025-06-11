import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import ChatGroupController from "../controllers/ChatGroupsController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const router = Router();

// Authentication Routes
router.post("/auth/login", AuthController.login);

// Chat Groups Routes
router.post("/chat-group", AuthMiddleware, ChatGroupController.store);
router.get("/chat-group", AuthMiddleware, ChatGroupController.index);
router.get("/chat-group/:id", AuthMiddleware, ChatGroupController.show);
router.put("/chat-group/:id", AuthMiddleware, ChatGroupController.update);
router.delete("/chat-group/:id", AuthMiddleware, ChatGroupController.delete);

export default router;
