import io from "socket.io-client";
import { setPendingFriendsInvitations } from "../store/actions/friendsActions";
import store from "../store/store";

let socket;

export const connectWithSocktServer = (userDetails) => {
  const { token } = userDetails;
  socket = io("http://localhost:5002", {
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    console.info(`User with id ${socket.id} is connected`);
  });

  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });
};
