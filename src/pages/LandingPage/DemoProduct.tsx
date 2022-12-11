import { Button, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import imgItem from "../../assets/img_item.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "@emotion/styled";
type Props = {};

const StyledDemoProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding: 0 48px;

  scroll-snap-align: start;
  scroll-snap-stop: normal;
`;

const DemoProduct = (props: Props) => {
  return (
    <StyledDemoProduct id="demoproduct" className="min-h-screen ">
      <div className="">
        <div className="flex justify-between">
          <Typography className="text-3xl uppercase font-bold">Sale</Typography>
          <Button className="text-xl text-black " endIcon={<ArrowForward />}>
            See more
          </Button>
        </div>
        <Divider className="w-full bg-black mt-6" />
      </div>
      <div className="">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <SwiperSlide key={item}>
                <Card className="bg-red-300 h-96 rounded-2xl  cursor-pointer">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${imgItem})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }}
                  ></div>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </StyledDemoProduct>
  );
};

export default DemoProduct;
