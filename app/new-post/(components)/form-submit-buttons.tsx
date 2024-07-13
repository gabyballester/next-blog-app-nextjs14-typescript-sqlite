"use client";

import { useFormStatus } from "react-dom";

export const FormSubmitButtons = () => {
  const status = useFormStatus();

  return (
    <div>
      <button type="reset">Reset Form</button>
      <button>{status.pending ? "Creating post..." : "Create Post"}</button>
    </div>
  );
};
