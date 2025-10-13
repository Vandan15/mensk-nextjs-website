import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import { Col, Container, Row } from "react-bootstrap";
import PrivacyHero from "@/images/backgrounds/privacy-hero.jpg";

const title = "Privacy Policy";

export const metadata = {
  title: `${title} | Mensk Consultancy`,
  description:
    "Privacy Policy for MENSK Consultancy. Learn how we collect, use, and protect your personal information when you use our website and services.",
};

export default function PrivacyPolicy() {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Privacy Policy"
        title={title}
        parent="Home"
        parentHref="/"
        imgSrc={PrivacyHero.src}
      />
      <section className="privacy-policy-section py-5">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="privacy-content">
                {/* Overview */}
                <div className="privacy-section mb-5">
                  <p className="lead">
                    This Privacy Policy applies to our online activities at{" "}
                    <a
                      href="https://www.menskconsultancy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.menskconsultancy.com
                    </a>{" "}
                    and covers information shared and collected on the website.
                    This policy is not applicable to offline information
                    collection.
                  </p>
                </div>

                {/* Consent */}
                <div className="privacy-section mb-5">
                  <h3 className="mb-3">Consent</h3>
                  <p>
                    By using our website, you hereby consent to our Privacy
                    Policy and agree to its terms.
                  </p>
                </div>

                {/* Information Collection */}
                <div className="privacy-section mb-5">
                  <h3 className="mb-3">Information We Collect</h3>
                  <p>
                    The personal information that you are asked to provide, and
                    the reasons why you are asked to provide it, will be made
                    clear to you at the point we ask you to provide your
                    personal information.
                  </p>
                  <p className="mb-2">
                    We may collect the following information:
                  </p>
                  <ul className="list-unstyled ps-4">
                    <li className="mb-2">• Name</li>
                    <li className="mb-2">• Email address</li>
                    <li className="mb-2">• Phone number</li>
                    <li className="mb-2">• Company name</li>
                    <li className="mb-2">• Address</li>
                    <li className="mb-2">• Message contents</li>
                  </ul>
                </div>

                {/* How We Use Information */}
                <div className="privacy-section mb-5">
                  <h3 className="mb-3">How We Use Your Information</h3>
                  <p className="mb-2">
                    We use the information we collect in various ways, including
                    to:
                  </p>
                  <ul className="list-unstyled ps-4">
                    <li className="mb-2">
                      • Provide, operate, and maintain our website
                    </li>
                    <li className="mb-2">
                      • Personalize your website experience
                    </li>
                    <li className="mb-2">
                      • Understand and analyze how you use our website
                    </li>
                    <li className="mb-2">
                      • Develop new products, services, features, and
                      functionality
                    </li>
                    <li className="mb-2">
                      • Communicate with you, either directly or through one of
                      our partners
                    </li>
                    <li className="mb-2">
                      • Provide you with customer service and support
                    </li>
                    <li className="mb-2">
                      • Send you marketing and promotional communications
                    </li>
                    <li className="mb-2">• Send you emails</li>
                    <li className="mb-2">• Find and prevent fraud</li>
                  </ul>
                </div>

                {/* Log Files */}
                <div className="privacy-section mb-5">
                  <h3 className="mb-3">Log Files</h3>
                  <p>
                    MENSK Consultancy follows a standard procedure of using log
                    files. These files log visitors when they visit websites.
                    The information collected by log files includes:
                  </p>
                  <ul className="list-unstyled ps-4">
                    <li className="mb-2">• Internet Protocol (IP) addresses</li>
                    <li className="mb-2">• Browser type</li>
                    <li className="mb-2">• Internet Service Provider (ISP)</li>
                    <li className="mb-2">• Date and time stamps</li>
                    <li className="mb-2">• Referring/exit pages</li>
                    <li className="mb-2">• Number of clicks</li>
                  </ul>
                  <p className="mt-3">
                    This information is not linked to any information that is
                    personally identifiable. The purpose of the information is
                    for analyzing trends, administering the site, tracking
                    users&apos; movement on the website, and gathering demographic
                    information.
                  </p>
                </div>

                {/* Cookies and Web Beacons */}
                <div className="privacy-section mb-5">
                  <h3 className="mb-3">Cookies and Web Beacons</h3>
                  <p>
                    Like any other website, MENSK Consultancy uses cookies.
                    These cookies are used to:
                  </p>
                  <ul className="list-unstyled ps-4">
                    <li className="mb-2">
                      • Store information about visitors&apos; preferences
                    </li>
                    <li className="mb-2">
                      • Track which pages the visitor accessed or visited
                    </li>
                    <li className="mb-2">
                      • Customize web page content based on visitors&apos; browser
                      type or other information
                    </li>
                  </ul>
                </div>

                {/* Data Protection Rights */}
                <div className="privacy-section mb-5">
                  <h3 className="mb-3">Your Data Protection Rights</h3>
                  <p>
                    We would like to make sure you are fully aware of all of
                    your data protection rights. Every user is entitled to the
                    following:
                  </p>
                  <ul className="list-unstyled ps-4">
                    <li className="mb-2">
                      <strong>The right to access</strong> – You have the right
                      to request copies of your personal data.
                    </li>
                    <li className="mb-2">
                      <strong>The right to rectification</strong> – You have the
                      right to request that we correct any information you
                      believe is inaccurate or complete information you believe
                      is incomplete.
                    </li>
                    <li className="mb-2">
                      <strong>The right to erasure</strong> – You have the right
                      to request that we erase your personal data, under certain
                      conditions.
                    </li>
                    <li className="mb-2">
                      <strong>The right to restrict processing</strong> – You
                      have the right to request that we restrict the processing
                      of your personal data, under certain conditions.
                    </li>
                    <li className="mb-2">
                      <strong>The right to object to processing</strong> – You
                      have the right to object to our processing of your
                      personal data, under certain conditions.
                    </li>
                    <li className="mb-2">
                      <strong>The right to data portability</strong> – You have
                      the right to request that we transfer the data that we
                      have collected to another organization, or directly to
                      you, under certain conditions.
                    </li>
                  </ul>
                </div>

                {/* Children's Information */}
                <div className="privacy-section mb-5">
                  <h3 className="mb-3">Children&apos;s Information</h3>
                  <p>
                    Another part of our priority is adding protection for
                    children while using the internet. We encourage parents and
                    guardians to observe, participate in, and/or monitor and
                    guide their online activity.
                  </p>
                  <p>
                    MENSK Consultancy does not knowingly collect any Personal
                    Identifiable Information from children under the age of 13.
                    If you think that your child provided this kind of
                    information on our website, we strongly encourage you to
                    contact us immediately and we will do our best efforts to
                    promptly remove such information from our records.
                  </p>
                </div>

                {/* Contact Information */}
                {/* <div className="privacy-section mb-5">
                  <h3 className="mb-3">Contact Us</h3>
                  <p>
                    If you have any questions or concerns about this Privacy Policy, please feel free to contact us:
                  </p>
                  <div className="contact-details ps-4">
                    <p className="mb-2">
                      <strong>Address:</strong> 1974-0, Al Safiya Building, Hor Al Anz, Dubai, UAE
                    </p>
                    <p className="mb-2">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@menskconsultancy.com">info@menskconsultancy.com</a>
                    </p>
                    <p className="mb-2">
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+971529056309">+971-529056309</a>
                    </p>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <CtaOne />
    </Layout>
  );
}
