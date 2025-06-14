import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import ChatGroupController from "../controllers/ChatGroupsController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import ChatGroupUsersController from "../controllers/ChatGroupUsersController.js";
import ChatsController from "../controllers/ChatsController.js";

const router = Router();

// Authentication Routes
router.post("/auth/login", AuthController.login);

// Chat Groups Routes
router.post("/chat-group", AuthMiddleware, ChatGroupController.store); // Create a new chat group
router.get("/chat-group", AuthMiddleware, ChatGroupController.index); // List all chat groups
router.get("/chat-group/:id", ChatGroupController.show); // Get a specific chat group by ID (Not protected, as user don't need to login to chat in a group)
router.put("/chat-group/:id", AuthMiddleware, ChatGroupController.update); // Update a chat group
router.delete("/chat-group/:id", AuthMiddleware, ChatGroupController.delete); // Delete a chat group

// Chat Group Users Routes
router.get("/chat-group-users/:id", ChatGroupUsersController.index); // List all users in a chat group
router.post("/chat-group-users", ChatGroupUsersController.store); // Create a new chat group user(not protected, as user don't need to login to chat in a group)

// Chat Messages Routes
router.get("/chats/:id", ChatsController.index); // List all chat messages in a group

export default router;
