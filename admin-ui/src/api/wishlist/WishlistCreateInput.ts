import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WishlistCreateInput = {
  user: UserWhereUniqueInput;
  listings: ListingWhereUniqueInput;
};
