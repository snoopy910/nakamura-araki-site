import CanadaImage from "../../../assets/images/shared/desktop/illustration-canada.svg";

export const locationListData = [
  {
    country: "United States",
    image: CanadaImage,
    label: "see our United States contact information",
    anchorLink: "locations#us",
  },
];

export const locationData = {
  us: {
    id: "us",
    country: "United States",
    image: CanadaImage,
    anchorLink: "",
    address: {
      office: "Nakamura Araki Central Office",
      street: "7802 TIDWELL RD",
      state: "Houston, Texas, 77028",
    },
    contact: {
      header: "Contact",
      phone: "+1 856-549-1102",
      mail: "NAKAMURAARAKI336@outlook.com",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.572102628555!2d-95.2869104!3d29.8477706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ba6af8fcc29f%3A0x5cbb05e4120168b2!2s7802%20Tidwell%20Rd%2C%20Houston%2C%20TX%2077028%2C%20USA!5e0!3m2!1sen!2sru!4v1717208635477!5m2!1sen!2sru",
    },
  },
};
