import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WishlistWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  listings?: ListingWhereUniqueInput;
};
