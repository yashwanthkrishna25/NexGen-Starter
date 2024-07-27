import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  locationType?: InputJsonValue;
  placeType?: string;
  mapData?: string;
  locationData?: string;
  placeSpace?: string;
  placeAmeneties?: InputJsonValue;
  photos?: InputJsonValue;
  listingCreateBy?: UserWhereUniqueInput;
  title?: string;
  description?: string;
  price?: number;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
  trips?: TripUpdateManyWithoutListingsInput;
};
