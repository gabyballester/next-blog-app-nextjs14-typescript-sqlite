"use server";

import { redirect } from "next/navigation";
import { storePost } from "@/database";
import { CreateFormStateType, FormDataPost, Post } from "@/types";
import { uploadImage } from "@/lib";

export const createPostAction = async (
  _prevState: CreateFormStateType,
  formData: FormData
): Promise<CreateFormStateType> => {
  "use server";

  // form fields validation
  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const content = formData.get("content") as string;

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

  if (errors.length > 0) return { errors };

  const formDataPost: FormDataPost = {
    title,
    image,
    content,
    userId: 1,
  };

  let imageUrl;

  imageUrl = await uploadImage(image);

  if (!imageUrl) {
    errors.push("Upload image failed!");
  }

  if (errors.length > 0) return { errors };

  const newPost: Post = {
    imageUrl,
    title: formDataPost.title,
    content: formDataPost.content,
    userId: Number(formDataPost.userId),
  };

  const result = await storePost(newPost);

  if (!result || result.changes < 1 || result.lastInsertRowid < 1) {
    errors.push("Create post failed!");
  }

  if (errors.length > 0) return { errors };

  redirect("/feed");
};
