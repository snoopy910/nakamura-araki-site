import aboutMobile from "../../../assets/images/about/mobile/image-about-hero.jpg";
import aboutTablet from "../../../assets/images/about/tablet/image-about-hero.jpg";
import aboutDesktop from "../../../assets/images/about/desktop/image-about-hero.jpg";
import talentMobile from "../../../assets/images/about/mobile/image-world-class-talent.jpg";
import talentTablet from "../../../assets/images/about/tablet/image-world-class-talent.jpg";
import talentDesktop from "../../../assets/images/about/desktop/image-world-class-talent.jpg";
import dealMobile from "../../../assets/images/about/mobile/image-real-deal.jpg";
import dealTablet from "../../../assets/images/about/tablet/image-real-deal.jpg";
import dealDesktop from "../../../assets/images/about/desktop/image-real-deal.jpg";

export const aboutData = {
  sectionOne: {
    header: "About Me",
    content: {
      p1: "Since 2010, I am a creative developer that produces lasting results for my clients. I’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. I am always looking forward to creating brands, products, and digital experiences that connect with my clients’ audiences.",
    },
    image: {
      imgMobile: aboutMobile,
      imgTablet: aboutTablet,
      imgDesktop: aboutDesktop,
      imgAlt: "developers collaborating on a project",
    },
  },
  sectionTwo: {
    header: "World-class talent",
    content: {
      p1: "I am a strategist, problem-solver, and technologist. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. I am constantly updating my skill in a myriad of platforms.",
      p2: "I am not merely interested in form — content and meaning are just as important. I give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with my high-quality outcomes that encapsulates their brand’s story and mission.",
    },
    image: {
      imgMobile: talentMobile,
      imgTablet: talentTablet,
      imgDesktop: talentDesktop,
      imgAlt: "a lady looking at beautiful arts on the wall",
    },
  },
  sectionThree: {
    header: "The real deal",
    content: {
      p1: "As strategic partner in my clients’ businesses, I am ready to take on any challenge as my own. Solving real problems require empathy and collaboration, and I strive to bring a fresh perspective to every opportunity. I make design and technology more accessible and give you tools to measure success.",
      p2: "I am visual storytellers in appealing and captivating ways. By combining business and marketing strategies, I inspire audiences to take action and drive real results.",
    },
    image: {
      imgMobile: dealMobile,
      imgTablet: dealTablet,
      imgDesktop: dealDesktop,
      imgAlt: "a lady pinning design ideas to the wall",
    },
  },
};
