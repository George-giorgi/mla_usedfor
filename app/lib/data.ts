import prisma from "./prisma";

// es satestod searchze gamoviyenot
const fetchItems = async () => {
  const data = await prisma.item.findMany();
  return data;
};

export { fetchItems };
