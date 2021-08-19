import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";

export const PrductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="available" source="available" />
        <ReferenceInput source="brand.id" reference="Brand" label="Brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="type" source="type" />
        <NumberInput label="unitPrice" source="unitPrice" />
      </SimpleForm>
    </Create>
  );
};
