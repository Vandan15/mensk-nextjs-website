import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import TeamPageCarousel from "@/components/TeamSection/TeamPageCarousel";

export const metadata = {
  title: "Team Carousel - Oslim NextJS Template",
  description: "Team Carousel page of Oslim NextJS Template For Business",
};

export default function Team2() {
  return (
    <Layout pageTitle="Team Carousel">
      <Header />
      <PageHeader page="Team" title="Team Carousel" />
      <TeamPageCarousel />
      <CtaOne />
    </Layout>
  );
}