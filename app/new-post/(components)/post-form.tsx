"use client";

import { useFormState } from "react-dom";
import { FormSubmitButtons } from "./form-submit-buttons";
import { CreateFormStateType, CreatePostActionType } from "@/types";

interface Props {
  createPostAction: CreatePostActionType;
}

const initialFormState: CreateFormStateType = { errors: [] };

export const PostForm = ({ createPostAction }: Props) => {
  const [state, formAction] = useFormState(createPostAction, initialFormState);

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>
        <div className="form-actions">
          <FormSubmitButtons />
        </div>
        {state.errors && (
          <ul className="form-errors">
            {state.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
};
