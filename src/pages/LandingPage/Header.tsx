import { Typography, Button } from "@mui/material";
import cover from "../../assets/cover.jpg";
import styled from "@emotion/styled";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
type Props = {};

const StyledHeader = styled.div`
  position: relative;
  .Header_title {
    color: #fff;
    position: absolute;
    top: 25%;
    left: 5%;
    width: 50%;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    .title_banner {
      font-size: 7rem;
      line-height: 1;
      font-weight: 700;
    }

    .title_shop {
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  scroll-snap-align: start;
  scroll-snap-stop: normal;
`;

const Header = (props: Props) => {
  return (
    <StyledHeader
      id="header"
      className="min-h-screen bg-red-300"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="Header_title">
        <Typography className="title_banner">Work in Progress</Typography>
        <Button
          className="title_shop"
          endIcon={<ArrowRightAltIcon className="text-4xl" />}
        >
          shop now
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
