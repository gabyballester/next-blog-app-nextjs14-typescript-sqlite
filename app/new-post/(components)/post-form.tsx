"use client";

import { useFormState } from "react-dom";
import { FormSubmitButtons } from "./form-submit-buttons";
import { CreateFormStateType } from "@/types";
import { createPostAction } from "@/actions/post.actions";
import { FormField } from "./form-field";
import { formFieldsData } from "../(data)/form-field-data";

const initialFormState: CreateFormStateType = { errors: [] };

export const PostForm = () => {
  const [state, formAction] = useFormState(createPostAction, initialFormState);

  return (
    <form action={formAction}>
      {formFieldsData.map((field, index) => (
        <FormField key={index} {...field} />
      ))}
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
  );
};
