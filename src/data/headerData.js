import logo from "@/images/resources/logo-1.png";

const home = {
  id: 1,
  name: "Home",
  href: "/",
  subNavItems: [
    {
      id: 1,
      name: "Home One",
      href: "/",
    },
    {
      id: 2,
      name: "Home Two",
      href: "/index-2",
    },
    {
      id: 3,
      name: "Home Three",
      href: "/index-3",
    },
    {
      id: 4,
      name: "OnePage Styles",
      href: "",
      subItems: [
        {
          id: 1,
          name: "Home One",
          href: "/index-one-page",
        },
        { id: 2, name: "Home Two", href: "/index-2-one-page" },
        { id: 3, name: "Home Three", href: "/index-3-one-page" },
      ],
    },
    {
      id: 5,
      name: "Header Styles",
      href: "",
      subItems: [
        { id: 1, name: "Header One", href: "/" },
        { id: 2, name: "Header Two", href: "/index-2" },
        { id: 3, name: "Header Three", href: "/index-3" },
      ],
    },
  ],
};

export const onePageNavItems = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "Services",
    href: "#services",
  },
  {
    id: 3,
    name: "About",
    href: "#about",
  },
  {
    id: 4,
    name: "Cases",
    href: "#cases",
  },
  {
    id: 5,
    name: "Team",
    href: "#team",
  },
  {
    id: 6,
    name: "News",
    href: "#news",
  },
];

export const onePageNavItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Cases",
    href: "#cases",
  },
  {
    id: 4,
    name: "Services",
    href: "#services",
  },
  {
    id: 5,
    name: "Testimonial",
    href: "#testimonial",
  },
  {
    id: 6,
    name: "News",
    href: "#news",
  },
];

export const onePageNavItemsThree = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "Services",
    href: "#services",
  },
  {
    id: 3,
    name: "About",
    href: "#about",
  },
  {
    id: 4,
    name: "Cases",
    href: "#cases",
  },
  {
    id: 5,
    name: "Testimonial",
    href: "#testimonial",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 7,
    name: "News",
    href: "#news",
  },
];

export const servicesSubNavItems = [
  { id: 1, name: "Company Incorporation", href: "/services/company-incorporation" },
  { id: 2, name: "Trademarks", href: "/services/trademarks" },
  { id: 3, name: "Wills", href: "/services/wills" },
  { id: 4, name: "Real Estate", href: "/services/real-estate" },
  { id: 5, name: "Legal Advisory", href: "/services/legal-advisory" },
  { id: 6, name: "Wealth Management", href: "/services/wealth-management" },
];

export const navItems = [
  // home,
  {
    id: 2,
    name: "Services",
    href: "/services",
    subNavItems: servicesSubNavItems,
  },
  {
    id: 2,
    name: "About",
    href: "/",
    // subNavItems: servicesSubNavItems,
  },
  // {
  //   id: 3,
  //   name: "Pages",
  //   href: "",
  //   subNavItems: [
  //     { id: 1, name: "About", href: "/about" },
  //     { id: 2, name: "Team", href: "/team" },
  //     { id: 3, name: "Team Two", href: "/team-2" },
  //     { id: 4, name: "Testimonials", href: "/testimonials" },
  //     { id: 5, name: "FAQs", href: "/faq" },
  //     { id: 6, name: "404 Error", href: "/404" },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "Cases",
  //   href: "/cases",
  //   subNavItems: [
  //     { id: 1, name: "Cases", href: "/cases" },
  //     { id: 2, name: "Cases Two", href: "/cases-2" },
  //     { id: 3, name: "Case Details", href: "/case-details" },
  //   ],
  // },
  {
    id: 5,
    name: "Insights",
    href: "/blog",
    // subNavItems: [
    //   { id: 1, name: "Blog Posts", href: "/blog" },
    //   { id: 2, name: "Blog Two", href: "/blog-2" },
    //   {
    //     id: 3,
    //     name: "Blog Sidebar",
    //     href: "/blog-sidebar",
    //     subItems: [
    //       { id: 1, name: "Blog Right Sidebar", href: "/blog-sidebar" },
    //       { id: 2, name: "Blog Left Sidebar", href: "/blog-sidebar-right" },
    //     ],
    //   },
    //   { id: 4, name: "Blog Details", href: "/blog-details" },
    // ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

const socials = [
  {
    id: 5,
    icon: "fab fa-linkedin",
    href: "https://www.linkedin.com/company/mensk-consultancy-llc/",
  },
  {
    id: 7,
    icon: "fab fa-twitter",
    href: "https://www.linkedin.com/company/mensk-consultancy-llc/",
  },
  
  {
    id: 6,
    icon: "fab fa-whatsapp",
    href: "https://wa.me/971501234567",
  },
  // {
  //   id: 2,
  //   icon: "fab fa-facebook-square",
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
  //   href: "#",
  // },
];

const headerData = {
  logo,
  navItems,
  callText: "Need help? Talk to an expert",
  phone: "+97-1529056309",
  phoneHref: "971529056309",
  email: "info@menskconsultancy.com",
  socials,
};

export default headerData;
