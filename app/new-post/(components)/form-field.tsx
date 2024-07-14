import { FormFieldType } from "@/types";

export const FormField: React.FC<FormFieldType> = ({
  label,
  id,
  type = "text",
  ...props
}) => (
  <p className="form-control">
    <label htmlFor={id}>{label}</label>
    {type === "textarea" ? (
      <textarea id={id} name={id} {...props} />
    ) : (
      <input type={type} id={id} name={id} {...props} />
    )}
  </p>
);
