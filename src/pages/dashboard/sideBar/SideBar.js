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
  backgroundColor: "var(--darken-gray-color)",
});

const SideBar = () => {
  const { activeRooms, isUserInRoom } = useSelector(({ room }) => room);
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton isUserInRoom={isUserInRoom} />
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
