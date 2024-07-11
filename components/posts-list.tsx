import { Post } from "@/types";
import { PostItem } from "./post-item";

export const Posts = ({ posts }: { posts: Post[] }) => {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {posts.map((post: Post) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};
