import { Grid } from "@mui/material";
import { Image } from "antd";
import logo from "./../../assets/logo.svg";
import { useEffect, useState } from "react";

const glassmorphism =
  "bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ";

export const Navbar = () => {
  const [scroll0, setScrol0] = useState(window.scrollY < 10);
  const [isMobile, setMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrol0(window.scrollY < 10);
    });
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth < 900);
    });
  }, []);
  return (
    <div className="flex justify-center items-center sticky top-0">
      <Grid
        container
        spacing={2}
        className={`${!scroll0 ? glassmorphism : ""}`}
      >
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          className=" flex justify-startitems-center"
        >
          <Image src={logo} height={70} preview={false} className="md:px-10" />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          className="flex flex-col justify-end px-9 items-center text-white"
        >
          {!isMobile ? (
            <>
              <a href="#" className="px-2">
                Accueil
              </a>
              <a href="#" className="px-2">
                Services
              </a>
              <a href="#" className="px-2">
                Nous
              </a>
              <a href="#" className="px-2">
                Contact
              </a>
            </>
          ) : (
            "Hamburger"
          )}
        </Grid>
      </Grid>
    </div>
  );
};
