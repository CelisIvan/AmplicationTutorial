import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";

export const PrductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="available" source="available" />
        <ReferenceField label="Brand" source="brand.id" reference="Brand">
          <TextField source={BRAND_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="type" source="type" />
        <TextField label="unitPrice" source="unitPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
