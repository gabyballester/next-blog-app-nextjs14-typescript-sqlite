"use server";

import { redirect } from "next/navigation";
import { storePost } from "@/database";
import { CreateFormStateType, FormDataPost, Post } from "@/types";

export async function createPostAction(
  _prevState: CreateFormStateType,
  formData: FormData
) {
  "use server";

  // form fields validation
  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const content = formData.get("content") as string;
  const userId = formData.get("userId") as string;

  let errors: string[] = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is mandatory.");
  }

  if (!image || !(image instanceof File) || image.size === 0) {
    errors.push("Image is mandatory and must be a valid image File.");
  }

  if (!content || content.trim() === "") {
    errors.push("Content is mandatory.");
  }

  if (errors.length > 0) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      errors,
    };
  } else {
    const formDataPost: FormDataPost = {
      title,
      image,
      content,
      userId,
    };

    const newPost: Post = {
      imageUrl: "",
      title: formDataPost.title,
      content: formDataPost.content,
      userId: Number(formDataPost.userId),
    };

    await storePost(newPost);

    redirect("/feed");
  }
}
