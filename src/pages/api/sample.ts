import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// TODO fix any
export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const users = await prisma.user.findMany();
  res.json(users);
}
