import ScrollTop from "../../components/BackToTop/ScrollTop";
import Category from "./Category";
import DemoProduct from "./DemoProduct";
import Header from "./Header";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Gender from "./Gender";
import About from "./About";
type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <Header />
      <DemoProduct />
      <Category />
      <Gender />
      <About />
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default LandingPage;
