export type Post = {
  id: string;
  imageUrl: string;
  title: string;
  content: string;
  userId: number;
  userFirstName: string;
  isLiked: boolean;
  likes: number;
  createdAt: string;
};

export type ApiPostResponse = {
  id: string;
  image: string;
  title: string;
  content: string;
  userId: number;
  userFirstName: string;
  isLiked: boolean;
  createdAt: string;
};

export type FormDataPost = {
  title: string;
  imageUrl: string;
  content: string;
  userId: number;
};

export type CreateFormStateType = { errors: string[] };

export type FormFieldType = {
  label: string;
  id: string;
  type?: string;
  accept?: string;
  rows?: number;
};
