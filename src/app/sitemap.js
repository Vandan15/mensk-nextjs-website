import apolloClient from "@/lib/apolloClient";
import { GET_POSTS_FOR_SITEMAP } from "@/graphql/queries";

export default async function sitemap() {
  const baseUrl = 'https://menskconsultancy.com';

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Fetch blog posts dynamically
  let blogRoutes = [];
  try {
    const { data } = await apolloClient.query({
      query: GET_POSTS_FOR_SITEMAP,
    });

    blogRoutes = data.posts.edges
      .filter((edge) => {
        // Filter out posts with noindex
        return edge.node.seo?.metaRobotsNoindex !== 'noindex';
      })
      .map((edge) => ({
        url: `${baseUrl}/blog/${edge.node.slug}`,
        lastModified: new Date(edge.node.modified),
        changeFrequency: 'monthly',
        priority: 0.8,
      }));
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
