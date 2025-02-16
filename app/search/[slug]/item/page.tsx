import Item from "@/app/ui/Item/Item";
import { findeItem } from "@/app/lib/data";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const item = await findeItem(params.slug);

  return <div>{<Item item={item} />}</div>;
}
