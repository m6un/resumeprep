"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DeleteIcon, PinIcon } from "./icons";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  // handle onDrop
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".pdf",
    multiple: false,
  });

  return (
    <div className="flex flex-col gap-4 justify-center items-center px-6 pb-5 pt-6 w-1/3 bg-white backdrop-filter backdrop-blur-md rounded-3xl border border-gray-300/50 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.22)] ">
      <p className="self-start text-md font-medium">Upload resume</p>
      <div
        {...getRootProps()}
        className={`bg-white relative z-10 w-full h-80 rounded-3xl  flex flex-col justify-center items-center cursor-pointer 
          border border-dashed border-gray-500/20 hover:bg-gray-50/60 hover:border-gray-500/40
          ${isDragActive ? "bg-gray-50/60 border-gray-500/40" : ""}`}
      >
        <input {...getInputProps()} />
        {!file ? (
          <div className="text-gray-500 flex flex-col gap-2 items-center">
            <PinIcon />
            <p className="text-xs text-gray-500/80">
              Drag & drop or click to choose file
            </p>
          </div>
        ) : (
          <p className="text-sm text-ellipsis text-gray-500">{file?.name}</p>
        )}
      </div>
      {file && (
        <button
          className="w-full bg-black text-white rounded-xl text-sm h-10 hover:bg-black/90"
          onClick={() => setFile(null)}
        >
          <div className="flex flex-row items-center justify-center gap-1">
            <DeleteIcon />
            Remove
          </div>
        </button>
      )}
    </div>
  );
};

export default ResumeUpload;
