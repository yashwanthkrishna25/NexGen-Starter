import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { ListingTitle } from "../listing/ListingTitle";

export const WishlistEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="listings.id"
          reference="Listing"
          label="listings "
        >
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
