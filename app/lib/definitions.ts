export type Item_From_Admin = {
  id: string;
  item_unic_number: string;
  used_for: string;
  photo: Blob;
  mistakes: string;
};

export type Item = {
  uuid: string;
  name: string;
  usedfor: string;
  tipstriks: string;
  mistakes: string;
};
export type Item1 = {
  id: number;
  uuid: string;
  name: string;
  usedfor: string;
  tipstriks: string;
  mistakes: string;
};
export type MyComponentProps = {
  data: Item1[];
};
