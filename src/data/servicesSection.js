import image1 from "@/images/services/service-details-img-1.jpg";
import image3 from "@/images/services/service-details-img-2.jpg";
import image6 from "@/images/services/service-details-img-3.jpg";
import image4 from "@/images/services/service-details-img-4.jpg";
import image2 from "@/images/services/service-details-img-5.jpg";
import image5 from "@/images/services/service-details-img-6.jpg";

// Service specific images
import companyIncorporationImg from "@/images/services/company-incorporation.jpg";
import trademarksImg from "@/images/services/trademarks.jpg";
import willsImg from "@/images/services/will.jpg";
import realEstateImg from "@/images/services/real-estate.jpg";
import legalImg from "@/images/services/legal.jpg";
import wealthManagementImg from "@/images/services/wealth-management.jpg";
import { faqs } from "./fAQsPage";
import { servicesSubNavItems } from "./headerData";

export const servicesOne = {
  tagline: "Our Core Services",
  title: "Your Single Gateway to UAE Excellence",
  services: [
    {
      id: 1,
      title: "Company Incorporation",
      image: companyIncorporationImg,
      // icon: "icon-creative", // Company/Business related icon
      href: "/company-incorporation",
      text: "Start your UAE story. Your company incorporation made effortless. 21-day incorporation guarantee with all government approvals included.",
    },
    {
      id: 2,
      title: "Trademarks",
      image: trademarksImg,
      // icon: "icon-business", // Trademark/Brand protection icon
      href: "/trademarks",
      text: "Put your name on the map, and keep it yours. Intellectual property protection across UAE and GCC markets.",
    },
    {
      id: 3,
      title: "Wills",
      image: willsImg,
      // icon: "icon-global", // Legal document/Will icon
      href: "/wills",
      text: "Give your loved ones the certainty and security they deserve. DIFC Courts registered wills for expatriate families.",
    },
    {
      id: 4,
      title: "Real Estate",
      image: realEstateImg,
      // icon: "icon-mobile-analytics", // Property/Real estate icon
      href: "/real-estate",
      text: "Strategic Real Estate Solutions. Finance your UAE property deals with ease and expert guidance.",
    },
    {
      id: 5,
      title: "Legal Advisory",
      image: legalImg,
      // icon: "icon-analysis", // Legal/Advisory icon
      href: "/legal-advisory",
      text: "Make every decision in the UAE with confident legal advisory at your side. Contract drafting and regulatory compliance.",
    },
    {
      id: 6,
      title: "Wealth Management",
      image: wealthManagementImg,
      // icon: "icon-creative-1", // Wealth/Financial management icon
      href: "/wealth-management",
      text: "Make the most of what you've built, and watch it flourish. Strategic wealth preservation and growth for expatriate families.",
    },
  ],
};

export const servicesTwo = {
  title: "Our Services",
  tagline: "Services We Offer",
  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.",
  services: [
    {
      id: 1,
      icon: "icon-creative",
      title: "Consumer \n Product",
      href: "/consumer-product",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 2,
      icon: "icon-analysis",
      title: "Audit \n Marketing",
      href: "/audit-marketing",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 3,
      icon: "icon-business",
      title: "Banking \n Advising",
      href: "/banking-advising",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 4,
      icon: "icon-global",
      title: "Marketing \n Rules",
      href: "/marketing-rules",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 5,
      icon: "icon-verification",
      title: "business growth",
      href: "/consumer-product",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 6,
      icon: "icon-bank",
      title: "wealth Management",
      href: "/audit-marketing",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 7,
      icon: "icon-report1",
      title: "financial advice",
      href: "/banking-advising",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
    {
      id: 8,
      icon: "icon-travel",
      title: "Travel & Hospitality",
      href: "/marketing-rules",
      text: "Lorem ipsum is are \n many variations of \n pass of majority.",
    },
  ],
};

export const serviceDetailsSidebar = {
  navItems: servicesSubNavItems.slice(3),
  title: "Contact with \n us for any \n advice",
  phoneIcon: "icon-phone-call",
  text: "Need help? Talk to an expert",
  phone: "+1- ( 246 ) 333 - 0079",
  phoneHref: "12463330079",
};

const commonServiceDerails = {
  icon: "icon-global",
  text: "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s.",
  text2:
    "It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  text3:
    "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting.",
  contents: [
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  ],
  howHelps: [
    {
      id: 1,
      image: "service-details-how-help-1.jpg",
      text: "Pellentesque pharetra ornare dui, non malesuada magna convallis vitae.",
    },
    {
      id: 2,
      image: "service-details-how-help-2.jpg",
      text: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      points: [
        "In id diam nec nisi congue tincidunt",
        "Sed tristique lorem non tesque",
      ],
    },
  ],
  faqs,
};

export const consumerProduct = {
  image: image1,
  title: "Consumer Product",
  ...commonServiceDerails,
};

export const auditMarketing = {
  image: image2,
  title: "Audit Marketing",
  ...commonServiceDerails,
};

export const bankingAdvising = {
  image: image3,
  title: "Banking Advising",
  ...commonServiceDerails,
};

export const businessGrowth = {
  image: image4,
  title: "Business Growth",
  ...commonServiceDerails,
};

export const financialAdvice = {
  image: image5,
  title: "Financial Advice",
  ...commonServiceDerails,
};

export const marketingRules = {
  image: image6,
  title: "Marketing Rules",
  ...commonServiceDerails,
};
