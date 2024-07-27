import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  wishlists?: WishlistListRelationFilter;
  trips?: TripListRelationFilter;
};
