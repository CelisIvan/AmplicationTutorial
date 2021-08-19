import { PrductWhereInput } from "./PrductWhereInput";
import { PrductOrderByInput } from "./PrductOrderByInput";

export type PrductFindManyArgs = {
  where?: PrductWhereInput;
  orderBy?: PrductOrderByInput;
  skip?: number;
  take?: number;
};
