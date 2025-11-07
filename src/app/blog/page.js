import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import BlogListing from "@/components/NewsSection/BlogListing";
import PageHeader from "@/components/Reuseable/PageHeader";
import ContactBg from "@/images/backgrounds/contact-bg.jpg";
import apolloClient from "@/lib/apolloClient";
import { GET_POSTS } from "@/graphql/queries";

export const metadata = {
  title: "Blog | Mensk Consultancy",
  description: "Explore expert insights, market research trends, and business consultancy articles from Mensk Consultancy. Stay informed with our latest UAE market analysis and industry expertise.",
};

export default async function Blog() {
  let posts = [];
  let pageInfo = {
    hasNextPage: false,
    endCursor: null,
  };

  try {
    const { data } = await apolloClient.query({
      query: GET_POSTS,
      variables: {
        first: 9,
      },
    });

    posts = data.posts.edges.map((edge) => ({
      id: edge.node.id,
      title: edge.node.title,
      slug: edge.node.slug,
      excerpt: edge.node.excerpt,
      date: edge.node.date,
      image: edge.node.featuredImage?.node?.sourceUrl || null,
      imageAlt: edge.node.featuredImage?.node?.altText || edge.node.title,
      author: edge.node.author?.node?.name || 'Admin',
      authorAvatar: edge.node.author?.node?.avatar?.url || null,
      categories: edge.node.categories?.edges.map(cat => ({
        name: cat.node.name,
        slug: cat.node.slug,
      })) || [],
      tags: edge.node.tags?.edges.map(tag => ({
        name: tag.node.name,
        slug: tag.node.slug,
      })) || [],
    }));

    pageInfo = data.posts.pageInfo;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return (
    <Layout pageTitle="Blog" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Blog" title="Stay Informed. Stay Ahead. UAE Market Insights." imgSrc={ContactBg.src}/>
      <BlogListing
        initialPosts={posts}
        pageInfo={pageInfo}
        className="news-page"
        hideTitle
      />
    </Layout>
  );
}