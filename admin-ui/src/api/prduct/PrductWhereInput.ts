import { BooleanFilter } from "../../util/BooleanFilter";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type PrductWhereInput = {
  available?: BooleanFilter;
  brand?: BrandWhereUniqueInput;
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  type?: StringFilter;
  unitPrice?: FloatFilter;
};
