import { Items } from "../lib/placeholder-data";
import prisma from "@/app/lib/prisma";

export async function GET() {
  try {
    // const insertedItems = await Promise.all(
    //   Items.map((item) => prisma.item.create({ data: item }))
    // );

    // await prisma.item.deleteMany();

    console.log("Items seeed secsessfuly");
    return Response.json({
      message: "Database seeded successfully",
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
