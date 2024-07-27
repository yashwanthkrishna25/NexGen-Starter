import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";
import { TripTitle } from "../trip/TripTitle";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="placeType" source="placeType" />
        <TextInput label="mapData" source="mapData" />
        <TextInput label="locationData" source="locationData" />
        <TextInput label="placeSpace" source="placeSpace" />
        <div />
        <div />
        <ReferenceInput
          source="listingCreateBy.id"
          reference="User"
          label="listingCreateBy/"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <TextInput label="description " multiline source="description" />
        <NumberInput label="price " source="price" />
        <ReferenceArrayInput
          source="wishlists"
          reference="Wishlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WishlistTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="trips"
          reference="Trip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
