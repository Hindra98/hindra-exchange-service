import React, { useState } from "react";

type FilesUploadProps = {
  allowedTypes?: string[];
  label?: string;
  capture?: "user" | "environment" | boolean;
  maxSize?: number;
  minFiles?: number;
  maxFiles?: number;
  required?: boolean;
  onFilesChange?: (files: File[]) => void;
};

const FilesUpload: React.FC<FilesUploadProps> = ({
  label = "Importer vos fichiers (PDF ou image, max 5 Mo)",
  capture,
  allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/webp"],
  maxSize = 5 * 1024 * 1024, // 5MB
  minFiles = 0,
  maxFiles = 500,
  required = false,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
      ? Array.from(event.target.files)
      : [];
    if (selectedFiles.length > 0) {
      if (selectedFiles.length < minFiles || selectedFiles.length > maxFiles) {
        setError(
          `Veuillez sélectionner entre ${minFiles} et ${maxFiles} fichiers.`
        );
        return;
      }

      const validFiles = selectedFiles.filter(
        (file) => allowedTypes.includes(file.type) && file.size <= maxSize
      );

      if (validFiles.length !== selectedFiles.length) {
        setError(
          "Certains fichiers ont été rejetés (format non valide ou taille dépassée). Veuillez vérifier votre sélection."
        );
      } else {
        setError("");
      }
      const renamedFiles = validFiles.map((file, idx) => {
        const ext = file.name.split(".").pop();
        const name = `Fichier_${idx+1}.${ext}`;
        return new File([file], name, { type: file.type });
      });

      setFiles(renamedFiles);
      // onFilesChange && onFilesChange(renamedFiles);
    }
  };

  return (
    <div className="flex flex-col gap-2 file w-full h-full border rounded-lg shadow-md">
      <label className="" htmlFor="file-upload">
        {label}
      </label>
      
      <div className={`text-md flex flex-row gap-0 items-center border px-2 py-1 input-dashboard w-full cursor-pointer`}>
        
        <input
        id="file-upload"
        name="file-upload"
        required={required}
        capture={capture}
        type="file"
        accept={allowedTypes.join(", ")}
        onChange={handleFileChange}
        multiple
        className="w-full cursor-pointer"
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {files.length > 0 && (
        <div className="p-2">
          <p className="text-sm font-medium text-gray-700">
            Fichiers sélectionnés :
          </p>
          <div className="flex gap-2 flex-wrap items-center">
            {files.map((file, index) => (
              <div
                key={index}
                className="w-20 h-20 text-sm flex items-center justify-center rounded-md border border-gray-300 text-gray-500"
              >
                {file.type.startsWith("image") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                ) : (
                  <a
                    href={URL.createObjectURL(file)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2"
                  >
                    {file.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesUpload;
