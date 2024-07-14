import { togglePostLikeStatus } from "@/actions/post.actions";
import { Post } from "@/types";
import { useOptimistic } from "react";

interface Props {
  posts: Post[];
}

export const useUpdatePost = ({ posts }: Props) => {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(
    posts,
    (prevPosts, updatedPostId) => {
      const updatedPostIndex = prevPosts.findIndex(
        (post) => post.id === updatedPostId
      );

      if (updatedPostIndex === -1) {
        return prevPosts;
      }

      const updatedPost = { ...prevPosts[updatedPostIndex] };
      updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
      updatedPost.isLiked = !updatedPost.isLiked;
      const newPosts = [...prevPosts];
      newPosts[updatedPostIndex] = updatedPost;
      return newPosts;
    }
  );

  const updatePost = async (postId: string) => {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  };

  return { optimisticPosts, updatePost };
};
