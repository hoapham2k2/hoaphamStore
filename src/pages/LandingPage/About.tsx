import React from "react";
import styled from "@emotion/styled";
import ceo from "../../assets/ceo.jpg";
import { Button, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
const StyledAbout = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  scroll-snap-align: start;
  scroll-snap-stop: normal;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
type Props = {};

const About = (props: Props) => {
  return (
    <StyledAbout className="h-screen px-12 pb-6">
      <div className="h-full w-full flex">
        <div
          className="w-full h-3/4  self-end mb-12"
          style={{
            backgroundImage: `url(${ceo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="h-full w-full flex">
        <div className="content w-full h-3/4 self-end mb-12">
          <Typography className="text-5xl uppercase font-bold w-2/3 leading-tight ">
            History of Hoapham brand
          </Typography>
          <div className="w-3/4">
            <Typography className="mb-12 text-justify text-lg ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ex
              odit deleniti quas blanditiis voluptatum et, reprehenderit dolore
              recusandae eum reiciendis possimus non suscipit! Ipsam eligendi
              nulla natus deserunt repellendus.
            </Typography>
            <Button
              className="text-base text-black "
              endIcon={<ArrowForward />}
            >
              See more
            </Button>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
