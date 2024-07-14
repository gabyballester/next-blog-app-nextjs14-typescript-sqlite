import { ApiPostResponse, Post } from "@/types";

export const mapperApiPostResponseToPost = (
  apiPostResponse: ApiPostResponse
): Post => {
  return {
    id: apiPostResponse.id,
    imageUrl: apiPostResponse.image,
    title: apiPostResponse.title,
    content: apiPostResponse.content,
    userId: apiPostResponse.userId,
    userFirstName: apiPostResponse.userFirstName,
    isLiked: apiPostResponse.isLiked,
    createdAt: apiPostResponse.createdAt,
    likes: apiPostResponse.likes,
  };
};
