import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import ActiveRoomButton from "./ActiveRoomButton";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const SideBar = () => {
  const { activeRooms, isUserInRoom } = useSelector(({ room }) => room);
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton />
      {activeRooms.map((room) => (
        <ActiveRoomButton
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          isUserInRoom={isUserInRoom}
          key={room.roomId}
        />
      ))}
    </MainContainer>
  );
};

export default SideBar;
