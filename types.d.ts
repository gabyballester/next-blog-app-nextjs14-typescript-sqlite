export interface Post {
  id: string;
  imageUrl: string;
  title: string;
  content: string;
  userId: number;
  userFirstName: string;
  createdAt: string;
}

export interface ApiPostResponse {
  id: string;
  image: string;
  title: string;
  content: string;
  userId: number;
  userFirstName: string;
  createdAt: string;
}

export interface FormDataPost {
  title: string;
  imageUrl: string;
  content: string;
  userId: number;
}

export type CreateFormStateType = { errors: string[] };

export type CreatePostActionType = (
  prevState: CreateFormStateType,
  formData: FormData
) => Promise<CreateFormStateType>;
