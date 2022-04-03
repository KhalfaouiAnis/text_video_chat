import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import FriendsTitle from "../FriendsTitle";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
  overflowY: "auto",
});

const checkOnlineUsers = (friends = [], onlineUers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline;
  });
  return friends;
};

const FriendsList = () => {
  const { friends, onlineUsers } = useSelector(({ friends }) => friends);
  return (
    <MainContainer>
      {friends.length < 1 ? (
        <FriendsTitle title="No Friends Yet!" color="white" />
      ) : (
        checkOnlineUsers(friends, onlineUsers).map((f) => (
          <FriendsListItem
            username={f.username}
            id={f.id}
            key={f.id}
            isOnline={f.isOnline}
          />
        ))
      )}
    </MainContainer>
  );
};

export default FriendsList;
