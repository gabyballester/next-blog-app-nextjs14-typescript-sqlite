import { PostList } from "@/components";
import { getPosts } from "@/services";

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>All posts by all users</h1>
      <PostList posts={posts} />
    </>
  );
}
