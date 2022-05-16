import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import Video from "./Video";

const MainWrapper = styled("div")({
  height: "85%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideosContainer = () => {
  const { localStream, remoteStreams, screenSharingStream } = useSelector(
    ({ room }) => room
  );
  return (
    <MainWrapper>
      <Video
        stream={screenSharingStream ? screenSharingStream : localStream}
        isLocalStream
      />
      {remoteStreams.map((stream) => (
        <Video stream={stream} isLocalStream={false} key={stream.id} />
      ))}
    </MainWrapper>
  );
};

export default VideosContainer;
