import logo from "@/images/resources/logo-1.png";
import bg from "@/images/shapes/site-footer-shape-1.png";

const footerData = {
  bg,
  logo,
  aboutText: ["Mensk Consultancy LLC"],
  aboutSubText:["Licensed by Dubai Economic Department","License: 1369980"],
  socials: [
    
    // {
    //   id: 2,
    //   icon: "fab fa-facebook",
    //   href: "#",
    // },
    // {
    //   id: 3,
    //   icon: "fab fa-pinterest-p",
    //   href: "#",
    // },
    // {
    //   id: 4,
    //   icon: "fab fa-instagram",
    //   href: "https://www.instagram.com/menskconsultancydubai/",
    // },
    {
      id: 5,
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/company/mensk-consultancy-llc/",
    },
    // {
    //   id: 7,
    //   icon: "fab fa-twitter",
    //   href: "https://www.linkedin.com/company/mensk-consultancy-llc/",
    // },
    
    {
      id: 6,
      icon: "fab fa-whatsapp",
      href: "https://wa.me/+971501234567",
    },
  ],
  links: [
    {
      id: 1,
      text: "About Us",
      href: "/about",
    },
    // {
    //   id: 2,
    //   text: "Meet our team",
    //   href: "/team",
    // },
    // {
    //   id: 3,
    //   text: "Case stories",
    //   href: "/case",
    // },
    {
      id: 4,
      text: "Blog",
      href: "/blog",
    },
    {
      id: 5,
      text: "Contact",
      href: "/contact",
    },
    // {
    //   id: 6,
    //   text: "Support",
    //   href: "/about",
    // },
    // {
    //   id: 7,
    //   text: "Terms of Service",
    //   href: "/terms",
    // },
    {
      id: 8,
      text: "Privacy Policy",
      href: "/privacy",
    },
    // {
    //   id: 9,
    //   text: "Help",
    //   href: "/about",
    // },
  ],
  newsletterText: "Subsrcibe for our upcoming latest articles and resources",
  address: "1974-0, Al Safiya Building, Hor Al Anz, Dubai, UAE",
  phone: "+97-1529056309",
  phoneHref: "971529056309",
  email: "info@menskconsultancy.com",
  disclaimer: "Disclaimer: Guarantees, timelines, and compliance assurances are subject to the client's timely provision of all necessary information and documents, as well as any unforeseen real-time changes in governmental, regulatory, or judicial requirements that may impact the service process.",
  author: "Oslim",
  year: new Date().getFullYear(),
};

export default footerData;
