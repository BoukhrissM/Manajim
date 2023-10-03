import React, { Suspense, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import excavator from "./../../assets/excavator.jpg";
import logo from "./../../assets/logo.svg";
import { Grid } from "@mui/material";
import { Button } from "@nextui-org/react";
import { Image } from "antd";
const BgStyle = {
  backgroundImage: `url(${excavator})`,
};

const Hero = () => {
  useEffect(() => {
    document.title = "Accueil | Manajim";
  }, []);
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <div
        className="w-full h-screen bg-slate-400 top-0 z-0 bg-cover bg-center"
        style={BgStyle}
      >
        <div className="h-screen bg-black/70">
          <div className="h-screen container mx-auto">
            <Navbar />
            <Grid container className="text-white h-[90%]">
              <Grid items xs={12} sm={12} md={6} lg={6} className="md:px-10 ">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <span className="w-full font-extrabold text-6xl uppercase montserrat">
                    Manajim Pro African mining
                  </span>
                  <span className="montserrat">
                    société minière basée au Maroc. Depuis nos débuts en tant
                    que société minière, nous avons exécuté des projets
                    d'exploration dans plusieurs États, acquis plusieurs
                    équipements géophysiques et miniers, des engins de
                    terrassement et, plus important encore, nous avons acquis
                    les licences et permis d'exploitation nécessaires en tant
                    que professionnels miniers.
                  </span>
                  <div className="w-full py-7">
                    <Button
                      radius="lg"
                      className=" uppercase px-5 py-2 text-white border-white border-2 font-bold font-mono hover:bg-white hover:text-black transition-all"
                    >
                      Savoir Plus
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid
                items
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className="px-10 flex flex-col justify-center items-center"
              >
                <Image
                  src={logo}
                  alt="manajim"
                  preview={false}
                  className="hover:scale-105 transition-all cursor-default"
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Hero;
