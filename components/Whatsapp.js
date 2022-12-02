import Link from "next/link";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Whatsapp = () => {
  return (
    <div id="contact" className="Whatsapp-Container">
      <h3>
        Are you a recruiter or you need someone to do a project for you? You are
        at the right place
      </h3>
      <Link href="https://wa.me/+270653729081">
        <button>
          DM ME <WhatsAppIcon />
        </button>
      </Link>

      <style>
        {`
                .Whatsapp-Container{

                    padding:100px;
                    display:grid;
                    place-items:center;
                    margin-top:50px;
                }
               

                button{
                    padding:20px;
                    width:200px;
                    display:flex;
                    align-items:center;
                    color:black;
                    border:none;
                    font-size:20px;
                    background-color:#E84A5F;
                    justify-content:space-around;
                    border-radius:20px;

                }

                @media screen and (max-width: 480px){
                  .Whatsapp-Container{
                    padding:20px;
                  }
                }
                `}
      </style>
    </div>
  );
};

export default Whatsapp;
