import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";

export type PrductCreateInput = {
  available: boolean;
  brand?: BrandWhereUniqueInput | null;
  description: string;
  name: string;
  type: string;
  unitPrice: number;
};
