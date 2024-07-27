import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type ListingWhereInput = {
  id?: StringFilter;
  locationType?: JsonFilter;
  placeType?: StringFilter;
  mapData?: StringFilter;
  locationData?: StringFilter;
  placeSpace?: StringFilter;
  placeAmeneties?: JsonFilter;
  photos?: JsonFilter;
  listingCreateBy?: UserWhereUniqueInput;
  title?: StringFilter;
  description?: StringFilter;
  price?: FloatFilter;
  wishlists?: WishlistListRelationFilter;
  trips?: TripListRelationFilter;
};
