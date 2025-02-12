import prisma from "./prisma";

const fetchFilteredItems = async (query: string) => {
  const items = prisma.item.findMany({
    where: {
      OR: [{ uuid: { startsWith: query } }],
    },
    select: {
      uuid: true,
    },
  });

  return items;
};

// es satestod searchze gamoviyenot
const fetchItems = async () => {
  const data = await prisma.item.findMany();
  return data;
};
const fetchItems1 = async () => {
  console.log("start Fetching fetchItems1 data...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = await prisma.item.findMany();
  console.log("Data fetch completed after 3 seconds.");
  return data;
};
const fetchItems2 = async () => {
  const data = await prisma.item.findMany();
  return data;
};
const fetchItems3 = async () => {
  const data = await prisma.item.findMany();
  return data;
};

export {
  fetchItems,
  fetchItems1,
  fetchItems2,
  fetchItems3,
  fetchFilteredItems,
};
