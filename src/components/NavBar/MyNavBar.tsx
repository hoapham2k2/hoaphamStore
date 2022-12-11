import { AppBar, Button, Divider, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledMyNavBar = styled.div`
  .transcroll {
    background-color: transparent;
    box-shadow: none;
    transition: all 0.4s ease;
  }

  .scrolled {
    background-color: #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
  }

  .Navbar {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    gap: 1rem;

    list-style: none;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.2rem;
    }
  }

  a {
    text-decoration: none;
    .Hoapham {
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  }
`;

type Props = {};

const MyNavBar = (props: Props) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 100);
      });
    };
  }, []);
  return (
    <StyledMyNavBar id="back-to-top-anchor">
      <AppBar position="fixed" className={scroll ? "scrolled" : "transcroll"}>
        <Toolbar className="Navbar">
          <ul>
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/lookbook">Look Book</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
          <Link to="/">
            <Button className="Hoapham">HoaPham</Button>
          </Link>
          <ul>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/women">Sign In</Link>
            </li>
            <li>
              <Link to="/lookbook">Favourite</Link>
            </li>
            <li>
              <Link to="/aboutus">Bag(0)</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </StyledMyNavBar>
  );
};

export default MyNavBar;
