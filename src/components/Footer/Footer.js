import { IconButton } from "@mui/material";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
export default function Footer() {
  const data = [
    {
      id: 1,
      name: "About us",
    },
    {
      id: 2,
      name: "Careers",
    },
    {
      id: 3,
      name: "Contact us",
    },
  ];

  const contact = [
    {
      id: "1",
      icon1: <CallIcon />,
      title1: "Call",
      tamilnadu: "Tamil Nadu - 97501 97501",
      kerala: "Kerala - 97503 97503",
    },
    {
      id: "2",
      icon2: <PlaceIcon />,
      title2: "Registered Office",
      street: "No.20B, Kaliamman Koil Street, Sai Nagar,",
      address: "Virugambakkam, Chennai, Tamil Nadu, 600092.",
    },
    {
      id: "3",
      icon3: <EmailIcon />,
      title3: "Email",
      email: "bmgtn@bestmoneygold.in",
    },
  ];

  const region = [
    {
      id: 1,
      name: "Chennai",
    },
    {
      id: 2,
      name: "Covai",
    },
    {
      id: 3,
      name: "Erode",
    },
    {
      id: 4,
      name: "Vellore",
    },
    {
      id: 5,
      name: "Salem",
    },
    {
      id: 6,
      name: "Villupuram",
    },
    {
      id: 7,
      name: "Ramnad",
    },

    {
      id: 8,
      name: "Madurai",
    },

    {
      id: 9,
      name: "Nellai",
    },
    {
      id: 10,
      name: "Dindigul",
    },
    {
      id: 11,
      name: "Aruppukottai",
    },
    {
      id: 12,
      name: "Trichy",
    },
    {
      id: 13,
      name: "Theni",
    },
  ];
  return (
    <div>
      <div className="container">
        <img
          src="https://bestmoneygold.in/wp-content/uploads/2023/05/BMG-Logo.png"
          style={{ width: "250px" }}
        />
        <h2 style={{ color: "orangered" }}>Quick Links</h2>
        <div className="description">
          {data.map((dt, id) => (
            <p className="p-content" key={id}>
              {dt.name}
            </p>
          ))}
        </div>
        <div className="icons">
          <FacebookOutlinedIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="contact">
        {contact.map((con, id) => (
          <div key={id} style={{ maxHeight: "max-content" }}>
            <div>
              {con.icon1}
              <h3 className="header">{con.title1}</h3>
              <p className="pelement">{con.tamilnadu}</p>
              <p className="pelement">{con.kerala}</p>
            </div>
            <div>
              {con.icon2}
              <h3 className="header">{con.title2}</h3>
              <p className="street-name">{con.street}</p>
              <p className="street-name">{con.address}</p>
            </div>
            <div>
              {con.icon3}
              <h3 className="header">{con.title3}</h3>
              <p className="street-name">{con.email}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="region-div">
        <h3 style={{ color: "orangered", fontSize: "25px" }}>Our Regions</h3>
        <div className="region-con">
          {region.map((reg, id) => (
            <p key={id} className="region-name">
              {reg.name}
            </p>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p>© 2023 Best Money Gold Jewellery Pvt Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
}
