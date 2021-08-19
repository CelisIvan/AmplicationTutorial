import { Brand } from "../brand/Brand";

export type Prduct = {
  available: boolean;
  brand?: Brand | null;
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  type: string;
  unitPrice: number;
  updatedAt: Date;
};
