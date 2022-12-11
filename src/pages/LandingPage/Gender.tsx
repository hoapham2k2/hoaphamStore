import React from "react";
import styled from "@emotion/styled";
import formen from "../../assets/formen.jpg";
import forwomen from "../../assets/forwomen.jpg";
import { Button, Card } from "@mui/material";
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 50px;
  padding-bottom: 20px;

  .btn {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
  }

  .img {
    position: relative;
    &:hover {
      .btn {
        display: block;
      }
    }
  }

  .card {
    &:hover {
      elevation: 10;
    }
  }

  scroll-snap-align: start;
  scroll-snap-stop: normal;
`;

type Props = {};

const Gender = (props: Props) => {
  return (
    <StyledContact id="contact" className="min-h-screen px-12">
      <div className="flex justify-between gap-12 ">
        <Card className=" card w-full bg-black  ">
          <div
            className="w-full h-full img hover:opacity-80 transition-all duration-500 "
            style={{
              backgroundImage: `url(${formen})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              height: "85vh",
            }}
          >
            <Button className="btn">For men</Button>
          </div>
        </Card>
        <Card className=" card  w-full bg-black ">
          <div
            className="w-full h-full img hover:opacity-80 transition-all duration-500 "
            style={{
              backgroundImage: `url(${forwomen})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              height: "85vh",
            }}
          >
            <Button className="btn">For women</Button>
          </div>
        </Card>
      </div>
    </StyledContact>
  );
};

export default Gender;
