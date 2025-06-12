import { z } from "zod";

export const createChatSchema = z
  .object({
    title: z
      .string()
      .min(6, { message: "Chat title must be 6 characters long" }),
    passcode: z
      .string()
      .min(8, { message: "Chat Passcode must be 8 characters long" }),
  })
  .required();

export type createChatSchemaType = z.infer<typeof createChatSchema>;
