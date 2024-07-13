export interface Post {
  imageUrl: string;
  title: string;
  content: string;
  userId: number;
}

export interface FormDataPost {
  title: string;
  image: File | null;
  content: string;
  userId: string;
}

export type CreateFormStateType = { errors: string[] };

export type CreatePostActionType = (
  prevState: CreateFormStateType,
  formData: FormData
) => Promise<CreateFormStateType>;
