import React, { useState, useEffect } from "react";
import plant1 from "../../src/assets/home/plant1.webp";
import plant2 from "../../src/assets/home/plant2.webp";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DisplayMain() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const headers = [
    "Discover <br> Eco-Friendly Product",
    "Sustainable <br> and Environmentally-Conscious",
    "Low Impact <br> Sustainable Product",
    "Near to Nature <br> Low Toxic Emission",
  ];

  const [currentHeader, setCurrentHeader] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeader((prev) => (prev + 1) % headers.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [headers.length]);

  return (
    <>
      <div className="container-custom flex flex-row justify-between items-center p-4">
        <img className="main-image" src={plant1} alt="Main Plant" />

        <div className="header-container flex flex-col items-center px-4">
          <div
            className="header"
            dangerouslySetInnerHTML={{ __html: headers[currentHeader] }}
          ></div>
          <div className="subheader">
            Welcome to our Sustainable eco-friendly product showcase, where we
            offer a curated selection of sustainable and
            environmentally-conscious items to enhance your lifestyle.
          </div>
          <Button
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 w-max "
            variant="outlined"
            onClick={() => navigate("/product")}
            sx={{
              marginRight: 2,
              "&:hover": {
                backgroundColor: "#036570",
                color: "#fff",
                borderColor: "#036570",
              },
            }}
          >
            Explore
          </Button>
        </div>

        <img className="image" src={plant2} alt="Additional Plant" />
      </div>
    </>
  );
}

export default DisplayMain;
