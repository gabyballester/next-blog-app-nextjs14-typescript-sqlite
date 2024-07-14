"use client";

import { Post } from "@/types";
import { PostItem } from "./post-item";
import { useUpdatePost } from "./hooks";

export const PostList = ({ posts }: { posts: Post[] }) => {
  const { optimisticPosts, updatePost } = useUpdatePost({ posts });

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post: Post) => (
        <li key={post.id}>
          <PostItem post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
};
