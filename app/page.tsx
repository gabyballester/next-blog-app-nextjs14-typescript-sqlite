import { Suspense } from "react";
import { PostList } from "@/components";
import { getPosts } from "@/services";

export default async function Home() {
  const latestPosts = await getPosts(3);

  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <PostList posts={latestPosts} />
        </Suspense>
      </section>
    </>
  );
}
