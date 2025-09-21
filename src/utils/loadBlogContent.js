// Client-side function to load blog content from static HTML files
export const loadBlogContent = async (slug) => {
  try {
    const response = await fetch(`/blog-content/${slug}.html`);
    if (!response.ok) {
      throw new Error('Failed to load blog content');
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading blog content:', error);
    return null;
  }
};

// Server-side function to load blog content during build/SSR
export const getBlogContentSync = (slug) => {
  try {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // In browser, return null and let client-side loading handle it
      return null;
    }

    // Server-side: Read from file system
    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(process.cwd(), 'public', 'blog-content', `${slug}.html`);

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return content;
    } else {
      console.warn(`Blog content file not found: ${filePath}`);
      return null;
    }
  } catch (error) {
    console.error('Error loading blog content:', error);
    return null;
  }
};