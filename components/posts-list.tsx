import { PostExtended } from "@/types";
import { PostItem } from "./post-item";

export const Posts = ({ posts }: { posts: PostExtended[] }) => {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {posts.map((post: PostExtended) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};
