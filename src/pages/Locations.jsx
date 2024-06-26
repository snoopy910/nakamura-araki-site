import React from "react";
import { Helmet } from "react-helmet";
import { HiddenHeader } from "../global/GlobalStyles";
import MapCard from "../components/Main/Location/MapCard/MapCard";
import CtaSection from "../components/global/Cta/CtaSection";
import { ctaData } from "../data/global/CtaData";

const Locations = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Locations - Find Our Offices</title>
        <meta
          name="description"
          content="Nakamura Araki has an office in United States. Feel free to start your project."
        />
      </Helmet>
      <main>
        <HiddenHeader>Locate Our Offices</HiddenHeader>
        <MapCard data={data.us} />
        <CtaSection data={ctaData} />
      </main>
    </>
  );
};

export default Locations;
