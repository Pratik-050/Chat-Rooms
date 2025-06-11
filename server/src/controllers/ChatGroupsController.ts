import { Request, Response } from "express";
import prisma from "../config/db.config.js";

class ChatGroupController {
  static async store(req: Request, res: Response) {
    try {
      const body = req.body;
      const user = req.user;
      await prisma.chatGroup.create({
        data: {
          title: body.title,
          passcode: body.passcode,
          user_id: user?.id,
        },
      });
      res.status(201).json({ message: "Chat group created successfully!" });
    } catch (error) {
      console.error("Error creating chat group:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  static async index(req: Request, res: Response) {
    try {
      const user = req.user;
      const groups = await prisma.chatGroup.findMany({
        where: {
          user_id: user?.id,
        },
        orderBy: {
          created_at: "desc",
        },
      });
      res
        .status(200)
        .json({ message: "Chat groups fetched successfully!", data: groups });
    } catch (error) {
      console.error("Error creating chat groups:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  static async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.chatGroup.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "Chat group fetched successfully!" });
    } catch (error) {
      console.error("Error fetching chat group:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const body = req.body;
      const { id } = req.params;
      const group = await prisma.chatGroup.update({
        data: {
          title: body.title,
          passcode: body.passcode,
        },
        where: {
          id: id,
        },
      });
      res
        .status(200)
        .json({ message: "Chat group updated successfully!", data: group });
    } catch (error) {
      console.error("Error updating chat group:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.chatGroup.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "Chat group deleted successfully!" });
    } catch (error) {
      console.error("Error deleting chat group:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default ChatGroupController;
