import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await posts.json();
  const newsSitemaps = posts.map((item) => ({
    loc: `https://galacticdigitalstudios.com/${item.id.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}