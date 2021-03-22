// https://github.com/prisma/prisma-examples/blob/f6cc133/typescript/rest-nextjs-api-routes/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // @ts-expect-error global.prisma
  if (!global.prisma) {
    // @ts-expect-error global.prisma
    global.prisma = new PrismaClient();
  }
  // @ts-expect-error global.prisma
  prisma = global.prisma;
}
export default prisma;
