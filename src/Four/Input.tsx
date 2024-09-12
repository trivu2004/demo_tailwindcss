import React from "react";

interface InputProps {
  title: string;
  placeholder: string;
  type: "text" | "textarea";
}
export const Input: React.FC<InputProps> = ({ title, placeholder, type }) => {
  return (
    <div>
      <label className="block font-serif font-semibold" htmlFor={title}>
        {title}
      </label>
      {type == "text" && (
        <input
          id={title}
          type="text"
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-2 p-4 py-3"
        />
      )}
      {type == "textarea" && (
        <input
          id={title}
          type="text"
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-2 p-4 py-3"
        />
      )}
    </div>
  );
};
