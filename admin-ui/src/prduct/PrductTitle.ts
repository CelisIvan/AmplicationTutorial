import { Prduct as TPrduct } from "../api/prduct/Prduct";

export const PRDUCT_TITLE_FIELD = "name";

export const PrductTitle = (record: TPrduct) => {
  return record.name;
};
