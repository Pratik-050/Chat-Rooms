import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../config/db.config.js";

interface LoginPayloadType {
  name: string;
  email: string;
  oauthId: string;
  provider: string;
  image?: string;
}

class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const body: LoginPayloadType = req.body;
      const existingUser = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });

      if (!existingUser) {
        const newUser = await prisma.user.create({
          data: body,
        });
        const tokenPayload = {
          id: newUser.id,
          name: body.name,
          email: body.email,
          provider: body.provider,
        };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET as string, {
          expiresIn: "1h",
        });
        return res.status(201).json({
          message: "User Created!",
          user: { token: `Bearer ${token}`, ...newUser },
        });
      }
      const tokenPayload = {
        id: existingUser.id,
        name: body.name,
        email: body.email,
        provider: body.provider,
      };
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
      });
      return res.status(200).json({
        message: "User Logged in!",
        user: {
          token: `Bearer ${token}`,
          ...existingUser,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default AuthController;
