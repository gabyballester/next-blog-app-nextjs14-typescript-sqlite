import { FormFieldType } from "@/types";

export const formFieldsData: FormFieldType[] = [
  { label: "Title", id: "title", type: "text" },
  {
    label: "Image URL",
    id: "image",
    type: "file",
    accept: "image/png, image/jpeg",
  },
  { label: "Content", id: "content", type: "textarea", rows: 5 },
];
