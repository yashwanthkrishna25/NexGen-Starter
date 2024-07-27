import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Wishlist } from "../wishlist/Wishlist";
import { Trip } from "../trip/Trip";

export type Listing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  locationType: JsonValue;
  placeType: string;
  mapData: string;
  locationData: string;
  placeSpace: string;
  placeAmeneties: JsonValue;
  photos: JsonValue;
  listingCreateBy?: User;
  title: string;
  description: string;
  price: number;
  wishlists?: Array<Wishlist>;
  trips?: Array<Trip>;
};
