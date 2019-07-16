import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  //get the result of [selectUser] as user
  user => user.currentUser
);
