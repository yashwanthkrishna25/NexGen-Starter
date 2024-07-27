import { SortOrder } from "../../util/SortOrder";

export type WishlistOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  listingsId?: SortOrder;
};
