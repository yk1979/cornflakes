import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const questionCategories = await prisma.questionCategory.findMany({
    include: {
      contents: true,
    },
  });
  res.json(questionCategories);
}
