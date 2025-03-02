import { Suspense } from "react";
import { Metadata } from "next";
import { PostList } from "@/components";
import { getPosts } from "@/services";

export const metadata: Metadata = {
  title: "Latest posts",
  description: "Browse our latest posts",
};

export default async function Home() {
  const latestPosts = await getPosts(3);

  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here&apos;s what you might&apos;ve missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <PostList posts={latestPosts} />
        </Suspense>
      </section>
    </>
  );
}
