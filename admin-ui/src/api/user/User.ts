import { JsonValue } from "type-fest";
import { Listing } from "../listing/Listing";
import { Wishlist } from "../wishlist/Wishlist";
import { Trip } from "../trip/Trip";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  listings?: Array<Listing>;
  wishlists?: Array<Wishlist>;
  trips?: Array<Trip>;
};
