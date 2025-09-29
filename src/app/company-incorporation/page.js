import CaseDetailsContent from "@/components/CaseSection/CaseDetailsContent";
import WhatYouGet from "@/components/CaseSection/WhatYouGet";
import CtaOne from "@/components/CtaSection/CtaOne";
import Faqs from "@/components/FAQsPage/Faqs";
import FAQsPage from "@/components/FAQsPage/FAQsPage";
import Header from "@/components/Header/Header";
import HowWeWorks from "@/components/HowWeWorks/HowWeWorks";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import WhyChooseOne from "@/components/WhyChoose/WhyChooseOne";
import { serviceDetailsData } from "@/data/services";
import { consumerProduct } from "@/data/servicesSection";
import { Col, Container, Row } from "react-bootstrap";
import Faq from "../faq/page";
import CaseContentCards from "@/components/CaseSection/CaseContentCards";

const title = "Company Incorporation";

export const metadata = {
  title: `${title} | Mensk Consultancy`,
  description:
    "Start your UAE story with effortless company incorporation. 21-day incorporation guarantee with all government approvals included. Banking relationship facilitation and visa processing coordination.",
};

export default function CompanyIncorporation() {
  const {
    companyIncorporation: { hero, trustSignals, challenges,solutions,planning,faqs,process },

  } = serviceDetailsData;

  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Service Details"
        title={title}
        parent="Services"
        parentHref="/services"
      />
      {/* <ServiceDetails service={consumerProduct} /> */}
      <Container>
        <Row>
          <Col xl={12}>
            {/* <CaseDetailsImg
              image={image}
              clientName={clientName}
              category={category}
              date={date}
            /> */}
            <Row className="mb-5">
              <Col xl={12}>
                <CaseContentCards
                  title={hero?.title}
                  text1={hero?.description}
                  points={trustSignals?.map((item) => item.title)}
                />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xl={12}>
                <CaseDetailsContent
                  title={challenges?.title}
                  text1={challenges?.description}
                  points={[]}
                />
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xl={12}>
                <CaseDetailsContent
                  title={solutions?.title}
                  text1={solutions?.description}
                  points={solutions.points.map((item) => item.title)}
                />
              </Col>
            </Row>
            <Row className="mb-0">
              <Col xl={12}>
                <WhatYouGet points={planning.points} title={planning?.title} text={planning.description}/>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xl={12}>
                <HowWeWorks data={process}/>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xl={12}>
                <Faqs faqs={faqs.faqs} title={faqs.title}/>
              </Col>
            </Row>
            {/* <Row>
              <Col xl={12}>
                <CaseDetailsPagination /> 
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
      <CtaOne />
    </Layout>
  );
}
