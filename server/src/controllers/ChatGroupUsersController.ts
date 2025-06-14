import { Request, Response } from "express";
import prisma from "../config/db.config.js";

interface ChatGroupUser {
  group_id: string;
  name: string;
}

class ChatGroupUsersController {
  static async index(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const users = await prisma.groupUsers.findMany({
        where: {
          group_id: id as string,
        },
        orderBy: {
          created_at: "desc",
        },
      });
      res.status(200).json({
        message: "Chat group users fetched successfully!",
        data: users,
      });
    } catch (error) {
      console.error("Error fetching chat group users:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  static async store(req: Request, res: Response) {
    try {
      const body: ChatGroupUser = req.body;
      const data = await prisma.groupUsers.create({
        data: body,
      });
      res
        .status(201)
        .json({ message: "Chat group user created successfully!", data: data });
    } catch (error) {
      console.error("Error creating chat group user:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default ChatGroupUsersController;
