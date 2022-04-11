import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Social-Media-Icons"></div>
      <span>Developed using Next.Js @Ashlone Chibvuri</span>
      <style jsx>
        {`
          .Footer {
            text-align: center;
            padding: 50px;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
