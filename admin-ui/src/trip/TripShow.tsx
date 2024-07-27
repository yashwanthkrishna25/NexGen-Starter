import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { LISTING_TITLE_FIELD } from "../listing/ListingTitle";

export const TripShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="listing "
          source="listing.id"
          reference="Listing"
        >
          <TextField source={LISTING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="tripInfo" source="tripInfo" />
      </SimpleShowLayout>
    </Show>
  );
};
