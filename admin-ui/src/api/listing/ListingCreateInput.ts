import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  locationType: InputJsonValue;
  placeType: string;
  mapData: string;
  locationData: string;
  placeSpace: string;
  placeAmeneties: InputJsonValue;
  photos: InputJsonValue;
  listingCreateBy: UserWhereUniqueInput;
  title: string;
  description: string;
  price: number;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
  trips?: TripCreateNestedManyWithoutListingsInput;
};
