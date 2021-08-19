import { Prduct } from "../prduct/Prduct";

export type Brand = {
  createdAt: Date;
  id: string;
  name: string;
  products?: Array<Prduct>;
  updatedAt: Date;
};
