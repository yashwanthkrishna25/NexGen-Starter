import { InputJsonValue } from "../../types";
import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  listings?: ListingCreateNestedManyWithoutUsersInput;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
  trips?: TripCreateNestedManyWithoutUsersInput;
};
