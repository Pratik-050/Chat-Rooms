import { Request, Response } from "express";
import prisma from "../config/db.config.js";

class ChatsController {
  static async index(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const chat = await prisma.chats.findMany({
        where: {
          group_id: id as string,
        },
        orderBy: {
          created_at: "asc",
        },
      });
      res.status(200).json({
        message: "Chat messages fetched successfully!",
        data: chat,
      });
    } catch (error) {
      console.error("Error fetching chat messages:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default ChatsController;
