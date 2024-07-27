import { User } from "../user/User";
import { Listing } from "../listing/Listing";

export type Wishlist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  listings?: Listing;
};
