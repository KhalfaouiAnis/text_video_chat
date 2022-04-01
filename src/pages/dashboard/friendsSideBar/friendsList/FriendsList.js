import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";

const FRIENDS_ARRAY = [
  {
    id: 1,
    username: "Rami khalfaoui khalfaoui khalfaoui",
    isOnline: true,
  },
  {
    id: 2,
    username: "Mark",
    isOnline: true,
  },
  {
    id: 3,
    username: "Anna",
    isOnline: false,
  },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
  overflowY: "auto",
});

const FriendsList = () => {
  return (
    <MainContainer>
      {FRIENDS_ARRAY.map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

export default FriendsList;
