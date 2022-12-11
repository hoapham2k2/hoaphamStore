import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import styled from "@emotion/styled";

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;

  scroll-snap-align: start;
  scroll-snap-stop: normal;
`;

type Props = {};

interface PanelDetails {
  id: string;
  title: string;
}

// handle string to transform 'New Arrivals' to 'newArrivals'
const handleString = (str: string) => {
  return str
    .split(" ")
    .map((item) => item.toLowerCase())
    .join("");
};

const thumbnail = (str: string, number: number) => {
  return `https://res.cloudinary.com/dxjnvnxco/image/upload/v1670736501/demo-fashion/${handleString(
    str
  )}/${number}.jpg`;
};

const panels: PanelDetails[] = [
  {
    id: "01",
    title: "New Arrivals",
  },
  {
    id: "02",
    title: "denim",
  },
  {
    id: "03",
    title: "jack n coats",
  },
  {
    id: "04",
    title: "shirt",
  },
  {
    id: "05",
    title: "t-shirt n polos",
  },
  {
    id: "06",
    title: "pants",
  },
];

const Category = (props: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <StyledCategory className="min-h-screen px-12">
      <div className="">
        <div className="flex justify-between">
          <Typography className="text-3xl uppercase font-bold">
            Category
          </Typography>
          <Button className="text-xl text-black " endIcon={<ArrowForward />}>
            See more
          </Button>
        </div>
        <Divider className="w-full bg-black mt-6" />
      </div>
      <div>
        {panels.map((panel, index) => (
          <Accordion
            key={panel.id}
            expanded={expanded === panel.id}
            onChange={handleChange(panel.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0 }}
                className="text-3xl uppercase font-bold"
              >
                {panel.id}
              </Typography>
              <Typography className="text-3xl uppercase font-bold">
                {panel.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="flex justify-end gap-52 ">
              <div className=" flex-col">
                <Typography className="w-80 text-ellipsis text-justify ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta iste accusantium officiis, facere molestias perferendis
                  ipsum dolores quidem voluptatem iusto earum illum eos
                  recusandae quasi magnam natus quos repudiandae. Repellat?
                </Typography>
                <Button
                  className="text-xl text-black "
                  endIcon={<ArrowForward />}
                >
                  See more
                </Button>
              </div>
              <div className="flex">
                {[1, 2].map((item) => {
                  return (
                    <div
                      key={item}
                      className="ml-4"
                      style={{
                        backgroundImage: `url(${thumbnail(panel.title, item)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "200px",
                        height: "200px",
                      }}
                    />
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </StyledCategory>
  );
};

export default Category;
