import ErrorPage from "@/components/ErrorPage/ErrorPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";

export const metadata = {
  title: "404 Error - Oslim NextJS Template",
  description: "404 Error page - Page not found",
};

export default function NotFound() {
  return (
    <Layout pageTitle="404 Error" footerClassName="site-footer-three">
      <Header />
      <PageHeader title="404 Error" />
      <ErrorPage />
    </Layout>
  );
}