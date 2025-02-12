import { Item1, MyComponentProps } from "@/app/lib/definitions";

const Testfetches = async ({ data }: MyComponentProps) => {
  return (
    <div>
      <div className=" w-56 h-56 overflow-scroll">
        {data.map((item: Item1, i) => {
          return (
            <div className="" key={i}>
              <p>{item.uuid}</p>
              <p>{item.name}</p>
              <p>{item.usedfor}</p>
              <p>{item.tipstriks}</p>
              <p>{item.mistakes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testfetches;
