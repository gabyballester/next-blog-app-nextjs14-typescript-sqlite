"use client";

import { formatDate } from "@/lib";
import { LikeButton } from "./like-icon";
import { Post } from "@/types";

interface Props {
  post: Post;
  action: (postId: string) => Promise<void>;
}

export const PostItem = ({ post, action }: Props) => {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.imageUrl} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? "liked" : ""}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
};
