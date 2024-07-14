"use server";

import { redirect } from "next/navigation";
import { storePost, uploadImage } from "@/services";
import { CreateFormStateType, FormDataPost } from "@/types";

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

  let imageUrl;

  try {
    imageUrl = await uploadImage({ image, folderName: "nextjs-post-images" });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      throw new Error(String(error.message));
    } else {
      throw new Error(String(error));
    }
  }

  if (errors.length > 0) return { errors };

  const newPost: FormDataPost = {
    title,
    content,
    userId: 1,
    imageUrl,
  };

  let storedPost;

  try {
    storedPost = await storePost(newPost);
  } catch (error: Error | unknown) {
    if (error instanceof Error) throw new Error(JSON.stringify(error));
    throw new Error("Unhandled Error storing post");
  }

  if (errors.length > 0) return { errors };

  redirect("/feed");
};
