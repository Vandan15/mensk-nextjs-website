import bg from "@/images/shapes/contact-one-shape.png";

export const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Full name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email address",
    required: true,
  },
  {
    name: "phone",
    type: "text",
    placeholder: "Phone",
    required: false,
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    required: false,
  },
];

const common = {
  phone: "+971 52 905 6309",
  phoneHref: "971529056309",
  email: "info@menskconsultancy.com",
};

export const contactOne = {
  bg,
  // tagline: "contact with us",
  // title: "Begin Your Distinct UAE Journey Today",
  // text: "Pellentesque ultricies quam dui, id portt tor leo \n iaculis nec. Phasellus ac neque.",
  officeInfo: {
    address: {
      title: "Our Office Address",
      text: "1974-0, Al Safiya Building, Hor Al Anz, Dubai, UAE."
    },
    phone: {
      title: "Phone Number",
      text: "+971 52 905 6309"
    },
    email: {
      title: "E-Mail",
      text: "info@menskconsultancy.com"
    },
    workTime: {
      title: "Official Work Time",
      text: "We are available 24/7"
    }
  },
  inputs,
  bottomTitle: "Visit Our Office",
  contacts: [
    {
      id: 1,
      title: "Austin",
      text: "22 Texas West Hills",
      ...common,
    },
    {
      id: 2,
      title: "Boston",
      text: "22 Texas West Hills",
      ...common,
    },
    {
      id: 3,
      title: "New York",
      text: "22 Texas West Hills",
      ...common,
    },
    {
      id: 4,
      title: "Dubai",
      text: "22 Texas West Hills",
      ...common,
    },
  ],
};

export const contactPage = {
  tagline: "Get Free Consultation",
  title: "Have Any Question?",
  title2: "Begin Your Distinct UAE Journey Today",
  inputs,
};

export const contactDetails = {
  title: "Get in Touch",
  text: "Nulla quis commodo ligula. Curabitur bibendum ante at nibh lobortis, nec volutpat mauris faucibus.",
  address: "60 Road Broklyn Golden Street of New York. USA",
  contactIcon: "icon-phone1",
  ...common,
};
