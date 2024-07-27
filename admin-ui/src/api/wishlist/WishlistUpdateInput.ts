import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WishlistUpdateInput = {
  user?: UserWhereUniqueInput;
  listings?: ListingWhereUniqueInput;
};
