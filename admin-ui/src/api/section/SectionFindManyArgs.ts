import { SectionWhereInput } from "./SectionWhereInput";
import { SectionOrderByInput } from "./SectionOrderByInput";

export type SectionFindManyArgs = {
  where?: SectionWhereInput;
  orderBy?: SectionOrderByInput;
  skip?: number;
  take?: number;
};
