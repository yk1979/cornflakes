import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// TODO fix any
export default async function postSkills(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  const { body } = req;
  console.log(body);
  // const result = prisma.skillSummary.create({
  //   data: {
  //     ...body,
  //   },
  // });
  // res.json(result);
}
