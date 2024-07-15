"use client";

import { formatDate } from "@/lib";
import { LikeButton } from "./like-icon";
import { Post } from "@/types";
import Image, { type ImageLoaderProps } from "next/image";

interface Props {
  post: Post;
  action: (postId: string) => Promise<void>;
}

function imageLoader({ src, quality }: ImageLoaderProps) {
  const urlStart = src.split("upload/")[0];
  const urlEnd = src.split("upload/")[1];
  const transformations = `w_200,h_150,q_${quality}`;
  return `${urlStart}upload/${transformations}/${urlEnd}`;
}

export const PostItem = ({ post, action }: Props) => {
  return (
    <article className="post">
      <div className="post-image">
        <Image
          loader={imageLoader}
          src={post.imageUrl}
          width={200}
          height={120}
          alt={post.title}
          quality={50}
        />
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
