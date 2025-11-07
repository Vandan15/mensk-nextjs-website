import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import TestimonialsPage from "@/components/TestimonialSection/TestimonialsPage";

export const metadata = {
  title: "Testimonials | Mensk Consultancy",
  description: "Testimonials page of Oslim NextJS Template For Business",
};

export default function Testimonials() {
  return (
    <Layout pageTitle="Testimonials">
      <Header />
      <PageHeader page="Testimonials" title="Our Testimonials" />
      <TestimonialsPage />
      <CtaOne />
    </Layout>
  );
}