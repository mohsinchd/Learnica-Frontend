import React from "react";
// React-Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ descriptionHandler }) => {
  return (
    <ReactQuill
      theme="snow"
      formats={[
        "header",
        "font",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "link",
        "image",
      ]}
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      }}
      onChange={descriptionHandler}
    />
  );
};

export default TextEditor;
