import { PostForm } from "./(components)/post-form";
import { createPostAction } from "@/actions/post.actions";

export default function NewPostPage() {
  return <PostForm createPostAction={createPostAction} />;
}
