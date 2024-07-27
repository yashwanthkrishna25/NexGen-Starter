import { InputJsonValue } from "../../types";
import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  listings?: ListingUpdateManyWithoutUsersInput;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
  trips?: TripUpdateManyWithoutUsersInput;
};
