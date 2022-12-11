import React from "react";
import styled from "@emotion/styled";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
const StyledMyFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  height: 50vh;
  color: #fff;

  scroll-snap-align: start;
  scroll-snap-stop: normal;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;
type Props = {};

const MyFooter = (props: Props) => {
  return (
    <StyledMyFooter className="px-12 bg-black ">
      <div className="content">
        <div className=" flex gap-3 justify-center">
          <IconButton className="bg-white">
            <YouTubeIcon />
          </IconButton>
          <IconButton className="bg-white">
            <FacebookIcon />
          </IconButton>
          <IconButton className="bg-white">
            <InstagramIcon />
          </IconButton>
        </div>

        <div className="flex gap-3 justify-center ">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="flex justify-center">
          <p>© 2021, All Rights Reserved</p>
        </div>
      </div>
    </StyledMyFooter>
  );
};

export default MyFooter;
