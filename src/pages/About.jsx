import React from "react";
import { Helmet } from "react-helmet";
import { Main, HiddenHeader } from "../global/GlobalStyles";
import ContentCard from "../components/Main/About/ContentCard/ContentCard";
import CtaSection from "../components/global/Cta/CtaSection";
import { ctaData } from "../data/global/CtaData";

const About = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>About - We Are More Than a Brand</title>
        <meta
          name="description"
          content="I am a creative developer that produces lasting results for our clients. I’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact."
        />
      </Helmet>
      <Main>
        <HiddenHeader>About Me</HiddenHeader>
        {data && <ContentCard data={data.sectionOne} />}
        {data && <ContentCard reverse light gap data={data.sectionTwo} />}
        {data && <ContentCard light data={data.sectionThree} />}
        <CtaSection data={ctaData} />
      </Main>
    </>
  );
};

export default About;
