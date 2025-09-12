import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import TeamPage from "@/components/TeamSection/TeamPage";

export const metadata = {
  title: "Team - Oslim NextJS Template",
  description: "Team page of Oslim NextJS Template For Business",
};

export default function Team() {
  return (
    <Layout pageTitle="Team">
      <Header />
      <PageHeader page="Team" title="Our Team" />
      <TeamPage />
      <CtaOne />
    </Layout>
  );
}