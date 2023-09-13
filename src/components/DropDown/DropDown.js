import "./DropDown.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Dropdown() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="accordion">
      <h2 className="accordion-header">Frequently Asked Questions</h2>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ maxWidth: "1200px" }}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "#ff6900",
            color: "white",
            height: "90px",
           
            maxWidth: "1200px",
          }}
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              width: "73%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            What you should know when you want sell Mobile?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you are looking to sell your mobile, you should select a buyer
            who is fulfilling following things. Business Expertise, Certified
            Buyer, Transparent & Simplified Work Process
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ maxWidth: "1200px" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
            backgroundColor: "#ff6900",
            color: "white",
            height: "90px",
            maxWidth: "1200px",
          }}
        >
          <Typography
            sx={{
              flexShrink: 0,
              width: "73%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            How the Mobile Buyers Calculate the Value of Mobile?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are different factors while calculating the value. Weight,
            Purity, Market Status
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ maxWidth: "1200px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            backgroundColor: "#ff6900",
            color: "white",
            height: "90px",
            maxWidth: "1200px",
          }}
        >
          <Typography
            sx={{
              flexShrink: 0,
              width: "73%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            What is the difference between Vivo and Oppo Mobile?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The value of gold is measured by its purity which is denoted in
            karat (k) or carat (Ct). Higher karat signifies higher gold purity.
            Among Indians, 22K and 24K gold is quite a popular choice. At 99.99%
            purity, 24 Carat gold is used to make coins and bars. It is also
            used in the manufacturing of electronics, medical devices, and other
            gold articles. At 91.6% purity, 22 Carat gold is mostly used for
            making jewellery. Most of the gold sold in shops are either 22 Carat
            or 18 Carat gold.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ maxWidth: "1200px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{
            backgroundColor: "#ff6900",
            color: "white",
            height: "90px",
            maxWidth: "1200px",
          }}
        >
          <Typography
            sx={{
              flexShrink: 0,
              width: "73%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            What is the documentation required to sell the Mobile?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You require to bring in Original ID/Address proof, One Cheque Leaf,
            Purchase Invoice of the gold ornaments, Local address proof,
            Professional ID card. In case it is pledged gold, you need to bring
            the Pledged gold slip.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ maxWidth: "1200px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{
            backgroundColor: "#ff6900",
            color: "white",
            height: "90px",
            maxWidth: "1200px",
          }}
        >
          <Typography
            sx={{
              flexShrink: 0,
              width: "73%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Is there an age limit to sell Mobile with BMG?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. You should have completed 26 years of age on the date of
            selling Mobile.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
