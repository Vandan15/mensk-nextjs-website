import { inputs } from "./contact";
import { socials } from "./teamSection";

// Import specific blog images
import consultantsRoleImg from "@/images/blog/the-role-of-consultants-in-project-development-and-execution.png";
import businessOpportunitiesImg from "@/images/blog/how-to-identify-profitable-business-opportunities-with-market-research.png";
import marketResearchTrendsImg from "@/images/blog/trends-in-market-research-that-will-dominate-2025.png";

export const newsOne = {
  tagline: "What’s Happening",
  title: "Stay Informed. Stay Ahead. UAE Market Insights.",
  newsData: [
    {
      id: 1,
      image: consultantsRoleImg,
      // subtitle: "finance",
      title: "The Role of Consultants in Project Development & Execution",
      date: "April 30, 2025",
      comments: 2,
    },

    {
      id: 2,
      image: businessOpportunitiesImg,
      // subtitle: "finance",
      title: "How to Identify Profitable Business Opportunities with Market Research",
      date: "April 29, 2025",
      comments: 2,
    },
    {
      id: 3,
      image: marketResearchTrendsImg,
      // subtitle: "finance",
      title: "Trends in Market Research That Will Dominate 2025",
      date: "April 29, 2025",
      comments: 2,
    },

  ],
};

export const newsSidebar = {
  newses: [
    {
      id: 1,
      image: "news-sidebar-img-1.jpg",
      subtitle: "finance",
      date: "20 Oct, 2022",
      comments: 2,
      title: "Accounting Support During the Exponential Growth",
      text: "There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida.",
    },
    {
      id: 2,
      image: "news-sidebar-img-2.jpg",
      subtitle: "finance",
      date: "20 Oct, 2022",
      comments: 2,
      title: "Vivamus mattis Tristique Blandit vel Iaculis leo",
      text: "There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida.",
    },
    {
      id: 3,
      image: "news-sidebar-img-3.jpg",
      subtitle: "finance",
      date: "20 Oct, 2022",
      comments: 2,
      title: "Curabitur Scelerisque mi Porta justo porta",
      text: "There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida.",
    },
    {
      id: 4,
      image: "news-sidebar-img-4.jpg",
      subtitle: "finance",
      date: "20 Oct, 2022",
      comments: 2,
      title: "Pellentesque Pharetra Ornare dui, non Malesuada",
      text: "There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida.",
    },
  ],
};

export const newsSidebarSide = {
  posts: [
    {
      id: 1,
      image: "lp-1-1.jpg",
      date: "20 Oct, 2022",
      title: "Integer tristique odio vitae lorem gra",
    },
    {
      id: 1,
      image: "lp-1-2.jpg",
      date: "20 Oct, 2022",
      title: "Integer tristique odio vitae lorem gra",
    },
    {
      id: 1,
      image: "lp-1-3.jpg",
      date: "20 Oct, 2022",
      title: "Integer tristique odio vitae lorem gra",
    },
  ],
  categories: [
    {
      id: 1,
      name: "Consulting",
      href: "/blog-details",
    },
    {
      id: 2,
      name: "Marketing",
      href: "/blog-details",
    },
    {
      id: 3,
      name: "Technology",
      href: "/blog-details",
    },
    {
      id: 4,
      name: "Business & Finance",
      href: "/blog-details",
    },
    {
      id: 5,
      name: "Bank Cryptcy",
      href: "/blog-details",
    },
  ],
  tags: [
    {
      id: 1,
      name: "Consulting",
      href: "#",
    },
    {
      id: 2,
      name: "marketing",
      href: "#",
    },
    {
      id: 3,
      name: "Business",
      href: "#",
    },
    {
      id: 4,
      name: "Financial",
      href: "#",
    },
    {
      id: 5,
      name: "advice",
      href: "#",
    },
  ],
  comments: [
    {
      id: 1,
      icon: "fas fa-comment",
      message: "A Wordpress Commenter \n on Launch New Mobile App",
      name: "John Doe",
    },
    {
      id: 2,
      icon: "fas fa-comment",
      message: "A Wordpress Commenter \n on Launch New Mobile App",
      name: "John Doe",
    },
  ],
};

export const blogDetailsData = {
  1: {
    id: 1,
    image: consultantsRoleImg,
    subtitle: "consulting",
    date: "April 30, 2025",
    title: "The Role of Consultants in Project Development & Execution",
    slug: "the-role-of-consultants-in-project-development-and-execution",
    comments: [
      {
        id: 1,
        image: "comment-1-1.jpg",
        name: "Ahmed Al-Mansouri",
        text: "This article perfectly captures the value consultants bring to complex projects. In the UAE market, we've seen tremendous growth in consulting demand, especially in infrastructure and technology sectors.",
      },
      {
        id: 2,
        image: "comment-1-2.jpg",
        name: "Sarah Thompson",
        text: "As a project manager, I can attest to the importance of having experienced consultants on board. Their expertise in navigating regulatory requirements in the UAE has been invaluable for our projects.",
      },
    ],
    text: "In today's rapidly evolving business landscape, the role of consultants in project development and execution has become increasingly critical. Organizations across the UAE are recognizing that external expertise can provide the competitive edge needed to navigate complex challenges and capitalize on emerging opportunities. Consultants bring specialized knowledge, objective perspectives, and proven methodologies that can transform project outcomes. From initial strategy formulation to final implementation, consultants serve as catalysts for success, helping organizations avoid common pitfalls while accelerating time-to-market. Their ability to adapt quickly to changing circumstances and provide scalable solutions makes them indispensable partners in project execution.",
    text2: "The UAE's dynamic business environment presents unique opportunities and challenges that require specialized expertise. Consultants familiar with local regulations, cultural nuances, and market dynamics can provide invaluable guidance throughout the project lifecycle. Whether it's navigating complex regulatory frameworks, understanding stakeholder expectations, or implementing best practices from global markets, consultants serve as bridges between vision and reality. Their involvement often results in improved project efficiency, reduced risks, and enhanced stakeholder satisfaction. As the UAE continues to position itself as a global business hub, the demand for skilled consultants who can drive successful project outcomes will only continue to grow.",
    tags: ["Consulting", "Project Management", "UAE Business"],
    socials,
    pagination: [
      "How to Identify Profitable Business Opportunities \n with Market Research",
      "Trends in Market Research \n That Will Dominate 2025",
    ],
    inputs,
  },
  2: {
    id: 2,
    image: businessOpportunitiesImg,
    subtitle: "market research",
    date: "April 29, 2025",
    title: "How to Identify Profitable Business Opportunities with Market Research",
    slug: "how-to-identify-profitable-business-opportunities-with-market-research",
    comments: [
      {
        id: 1,
        image: "comment-1-1.jpg",
        name: "Mohammed Al-Rashid",
        text: "Excellent insights on market research methodologies. The section on consumer behavior analysis particularly resonated with our experience in the retail sector here in Dubai.",
      },
      {
        id: 2,
        image: "comment-1-2.jpg",
        name: "Lisa Martinez",
        text: "The practical examples provided are extremely helpful. We've implemented some of these research techniques and have already seen improvements in our market positioning strategy.",
      },
    ],
    text: "Market research serves as the foundation for identifying and validating profitable business opportunities in today's competitive landscape. By leveraging comprehensive data analysis, consumer insights, and industry trends, businesses can uncover hidden market gaps and develop strategies to capitalize on them. Effective market research goes beyond simple surveys and focus groups – it involves deep analysis of consumer behavior, competitive dynamics, and emerging market trends. In the UAE's diverse and rapidly growing economy, understanding local market nuances while maintaining global perspectives is crucial for success. Organizations that invest in robust market research capabilities position themselves to identify opportunities before competitors and develop products or services that truly meet market needs.",
    text2: "The key to successful opportunity identification lies in combining quantitative data with qualitative insights to create a comprehensive market picture. This involves analyzing demographic trends, economic indicators, technological developments, and regulatory changes that could impact market dynamics. Smart businesses use market research not just to validate existing ideas, but to discover entirely new opportunities that align with emerging consumer needs and market trends. By establishing systematic research processes and leveraging modern analytics tools, organizations can transform market research from a periodic activity into a continuous competitive advantage that drives sustained growth and profitability.",
    tags: ["Market Research", "Business Strategy", "Opportunity Analysis"],
    socials,
    pagination: [
      "The Role of Consultants in Project \n Development & Execution",
      "Trends in Market Research \n That Will Dominate 2025",
    ],
    inputs,
  },
  3: {
    id: 3,
    image: marketResearchTrendsImg,
    subtitle: "trends",
    date: "April 29, 2025",
    title: "Trends in Market Research That Will Dominate 2025",
    slug: "trends-in-market-research-that-will-dominate-2025",
    comments: [
      {
        id: 1,
        image: "comment-1-1.jpg",
        name: "Dr. Fatima Al-Zahra",
        text: "The insights on AI-powered research tools are fascinating. We're already seeing these technologies transform how we conduct consumer research in the Gulf region.",
      },
      {
        id: 2,
        image: "comment-1-2.jpg",
        name: "James Parker",
        text: "Great overview of emerging trends. The section on real-time analytics particularly caught my attention - it's exactly what we need for our fast-paced market environment.",
      },
    ],
    text: "The market research landscape is undergoing a dramatic transformation as we enter 2025, driven by technological advances, changing consumer behaviors, and evolving business needs. Artificial intelligence and machine learning are revolutionizing how we collect, analyze, and interpret market data, enabling real-time insights and predictive analytics that were impossible just a few years ago. Mobile-first research methodologies are becoming the norm as consumers increasingly engage through smartphones and digital platforms. Social media listening and sentiment analysis are providing unprecedented insights into consumer opinions and preferences, while advanced analytics tools are making it possible to process vast amounts of unstructured data to uncover meaningful patterns and trends.",
    text2: "The future of market research lies in the integration of multiple data sources and the application of sophisticated analytical techniques to generate actionable insights. Voice analytics, video analysis, and biometric feedback are opening new frontiers in understanding consumer emotions and motivations. As privacy regulations continue to evolve, research methodologies are adapting to balance comprehensive insights with respect for consumer privacy. The most successful organizations in 2025 will be those that embrace these technological advances while maintaining a human-centered approach to understanding market dynamics. By staying ahead of these trends, businesses can ensure their market research capabilities remain relevant and effective in an increasingly complex and fast-paced business environment.",
    tags: ["Market Research", "Technology Trends", "AI Analytics"],
    socials,
    pagination: [
      "How to Identify Profitable Business \n Opportunities with Market Research",
      "The Role of Consultants in Project \n Development & Execution",
    ],
    inputs,
  },
};

export const getBlogDetails = (id) => {
  return blogDetailsData[id] || null;
};

export const getBlogDetailsBySlug = (slug) => {
  return Object.values(blogDetailsData).find(blog => blog.slug === slug) || null;
};

export const newsDetails = blogDetailsData[1];
