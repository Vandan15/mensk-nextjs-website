"use client";

import { workTogether } from "@/data/workTogether";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import image1 from "@/images/resources/work-together-img-1.jpg";
import image2 from "@/images/resources/work-together-img-2.jpg";
import parsonImage from "@/images/resources/work-together-person-img.jpg";
import shape from "@/images/shapes/work-together-shape-1.png";

// Service specific images
import companyIncorporationImg from "@/images/services/company-incorporation.jpg";
import trademarksImg from "@/images/services/trademarks.jpg";
import willsImg from "@/images/services/will.jpg";
import realEstateImg from "@/images/services/real-estate.jpg";
import legalImg from "@/images/services/legal.jpg";
import wealthManagementImg from "@/images/services/wealth-management.jpg";
import Link from "next/link";

const Services = ({ id = "" }) => {
  const ref = useActive(id);

  const workTogether = [
    {
      shape,
      image1: companyIncorporationImg,
      image2,
      // tagline: "get to know us",
      title: "Company Incorporation",
      subHeader:
        "Start your UAE story. Your company incorporation made effortless.",
      text: `
  From sole proprietorship to multinational subsidiaries, we handle the complexities while you focus on growth. Every license application includes our compliance guarantee and lifetime advisory support.`,
      points: [
        "21-day incorporation guarantee*",
        "All government approvals included",
        "Banking relationship facilitation",
        "Visa processing coordination",
      ],
      parsonImage,
      personName: "Kevin Martin",
      cta: "Get Incorporation Quote",
      href: "/company-incorporation",
      imageFirst: true,
    },
    {
      shape,
      image1: trademarksImg,
      image2,
      // tagline: "get to know us",
      title: "Trademarks",
      subHeader: "Trademarks: Put your name on the map, and keep it yours.",
      text: `
  Intellectual property protection starts before you launch. Our trademark registration services secure your brand identity across UAE and GCC markets, preventing costly disputes later.
`,
      points: [
        "UAE and GCC trademark filing",
        "Brand name availability searches",
        "Opposition proceedings support",
        "Renewal and maintenance services",
      ],
      parsonImage,
      personName: "Kevin Martin",
      cta: "Protect Your Brand",
      href: "/trademarks",
      imageFirst: false,
    },
    {
      shape,
      image1: willsImg,
      image2,
      // tagline: "get to know us",
      title: "Wills",
      subHeader: "Wills: Give your loved ones the certainty and security they deserve",
      text: `
  UAE succession laws can be complex for expatriate families. Our will drafting services ensure your assets pass to intended beneficiaries according to your wishes, not local regulations.
`,
      points: [
        "DIFC Courts registered wills",
        "Asset protection strategies",
        "Family provision planning",
        "Cross-border inheritance solutions",
      ],
      parsonImage,
      personName: "Kevin Martin",
      cta: "Secure Your Will",
      href: "/wills",
      imageFirst: true,
    },
    {
      shape,
      image1: realEstateImg,
      image2,
      // tagline: "get to know us",
      title: "Real Estate",
      subHeader: "Strategic Real Estate Solutions. Finance your UAE property deals with ease.",
      text: `
  We bring clarity to Dubai’s luxury and investment financing options. Mensk bridges you to the city’s best lenders, guides legal structures, and ensures every step is compliant, so your investment grows securely.
`,
      points: [
        "Guidance on mortgage qualification and application",
        "Legal review of financing contracts",
        "Advice on tax-efficient property holding structures",
        "Support for off-plan and secondary market purchases",
      ],
      parsonImage,
      personName: "Kevin Martin",
      cta: "Request Real Estate Advice",
      href: "/real-estate",
      imageFirst: false,
    },
    {
      shape,
      image1: legalImg,
      image2,
      // tagline: "get to know us",
      title: "Legal Advisory",
      subHeader: "Make every decision in the UAE with confident legal advisory at your side.",
      text: `
  From contract negotiations to regulatory compliance, our legal advisory services provide the expertise you need to operate confidently within UAE's evolving legal landscape.
`,
      points: [
        "Contract drafting and review",
        "Regulatory compliance guidance",
        "Dispute resolution support",
        "Employment law advisory",
      ],
      parsonImage,
      personName: "Kevin Martin",
      cta: "Book Legal Consultation",
      href: "/legal-advisory",
      imageFirst: true,
    },
    {
      shape,
      image1: wealthManagementImg,
      image2,
      // tagline: "get to know us",
      title: "Wealth Management",
      subHeader: "Wealth Management: Make the most of what you’ve built, and watch it flourish",
      text: `
  Strategic wealth preservation and growth for successful expatriate families. Our advisory services help you optimize your financial position while maintaining flexibility for future opportunities.
`,
      points: [
        "Investment portfolio optimization",
        "Tax efficient structuring",
        "Estate planning coordination",
        "Risk assessment and mitigation",
      ],
      parsonImage,
      personName: "Kevin Martin",
      cta: "Plan Your Wealth Strategy",
      href: "/wealth-management",
      imageFirst: false,
    },
    
  ];

  return (
    <section ref={ref} className="work-together" id={id}>
      <Container>
        <div>
          <Title
            title="Your Single Gateway to UAE Excellence"
            tagline="Our Core Services"
            className="text-center"
          />
        </div>
        {workTogether.map((item, index) => (
          <Row key={index} className="mb-5">
            <>
              <Col lg={6} className={item.imageFirst ? "order-lg-1" : "order-lg-2"}>
                <div className="work-together__left animated slideInLeft">
                  <div className="work-together__img-box">
                    <div className="work-together-shape-1">
                      <Image src={item.shape.src} alt="" />
                    </div>
                    <div className="work-together__img-1 mb-4 mb-lg-0">
                      <Image src={item.image1.src} alt="" />
                      {/* <div className="work-together__img-2">
                        <Image src={item.image2.src} alt="" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className={item.imageFirst ? "order-lg-2" : "order-lg-1"}>
                <div className="work-together__right">
                  <Title
                    title={item.title}
                    tagline={item.tagline}
                    className="text-left"
                  />
                  <p className="work-together__right-text mb-3">
                    {item.subHeader}
                  </p>
                  <p className="work-together__right-text">{item.text}</p>
                  <ul className="list-unstyled work-together__points">
                    {item.points.map((point, i) => (
                      <li key={i}>
                        <div className="icon">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                        <div className="text">
                          <p>{point}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link href={item.href} className="thm-btn">
                    {item.cta}
                  </Link>
                  {/* <div className="work-together__person">
                    <div className="work-together__person-img">
                      <Image src={item.parsonImage.src} alt="" />
                    </div>
                    <h2 className="work-together__person-name">{item.personName}</h2>
                  </div> */}
                </div>
              </Col>
            </>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Services;
