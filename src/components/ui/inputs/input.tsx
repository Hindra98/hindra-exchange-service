import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronsUpDown, Eye, EyeOff, PenBox } from "lucide-react";
import "@/styles/components/_input.scss";
import { Switch as ShadSwitch } from "../switch";
import { Img } from "../img/img";

export const Input = ({
  type = "text",
  name = "",
  id = "",
  placeholder = "",
  className = "",
  value = "",
  disabled = false,
  title = "",
  icon = "",
  inverse = false,
  onChange,
}: InputProps) => {
  return (
    <motion.div
      whileFocus={{ scale: 1.05 }}
      className={`${className} input-hindra input-inline text-md flex gap-2 items-center border-b border-primary pb-2 ${
        inverse ? "flex-row" : "flex-row-reverse"
      }`}
      title={title}
    >
      <motion.input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={
          "login-input w-full outline-none border-none outline-0 ring-0 border-0 focus-visible:ring-0 focus-visible:border-none"
        }
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {icon}
    </motion.div>
  );
};

export const InputPassword = ({
  type = "password",
  name = "",
  id = "",
  placeholder = "",
  className = "",
  disabled = false,
  title = "",
  eye = true,
  value = "",
  icon = "",
  onChange,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <motion.div
        whileFocus={{ scale: 1.05 }}
        className={`${className} input-hindra input-inline text-md flex flex-row gap-2 items-center border-b border-primary pb-2`}
        title={title}
      >
        {icon}
        <motion.input
          type={!eye ? type : showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          className={
            "login-input w-full outline-none border-none outline-0 ring-0 border-0 focus-visible:ring-0 focus-visible:border-none"
          }
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
        {eye &&
          (showPassword ? (
            <EyeOff
              onClick={() => setShowPassword(!showPassword)}
              className="icon cursor-pointer active:scale-90 duration-100"
            />
          ) : (
            <Eye
              onClick={() => setShowPassword(!showPassword)}
              className="icon cursor-pointer active:scale-90 duration-100"
            />
          ))}
      </motion.div>
    </>
  );
};

export const Inputs = ({
  type = "text",
  name = "",
  id = "",
  placeholder = "",
  className = "",
  value = "",
  disabled = false,
  title = "",
  icon = "",
  onChange,
}: InputProps) => {
  return (
    <motion.div
      whileFocus={{ scale: 1.05 }}
      className={`${className} input-hindra text-md flex gap-2 items-center border border-primary rounded-sm px-2`}
      title={title}
    >
      {icon}
      <motion.input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={
          " login-input w-full outline-none border-none outline-0 ring-0 border-0 focus-visible:ring-0 focus-visible:border-none py-1"
        }
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </motion.div>
  );
};

export const InputCheck = ({
  type = "checkbox",
  name = "",
  id,
  disabled = false,
  checked = false,
  className = "",
  value = "",
  label = "",
  title = "",
  inverse = false,
  onChange,
}: InputCheckProps) => {
  return (
    <motion.label
      whileFocus={{ scale: 1.05 }}
      className={`text-md flex gap-2 items-center cursor-pointer w-full ${
        inverse ? "flex-row" : "flex-row-reverse"
      }`}
      title={title}
      htmlFor={id}
    >
      <span className="w-full">{label}</span>
      <motion.input
        type={type}
        id={id}
        name={name}
        className={
          className +
          " login-input w-fit outline-none border-none outline-0 ring-0 border-0 focus-visible:ring-0 focus-visible:border-none"
        }
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
    </motion.label>
  );
};

export const Switch = ({
  name = "",
  id,
  disabled = false,
  checked = false,
  className = "",
  value = "",
  label = "",
  title = "",
  inverse = false,
  onChange,
}: SwitchProps) => {
  return (
    <motion.label
      whileFocus={{ scale: 1.05 }}
      className={`${className} text-md flex gap-4 items-center cursor-pointer w-full ${
        inverse ? "flex-row-reverse" : "flex-row"
      }`}
      title={title}
      htmlFor={id}
    >
      <span className="w-full">{label}</span>
      <ShadSwitch
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        className="cursor-pointer"
        checked={checked}
        onCheckedChange={onChange}
      />
    </motion.label>
  );
};

export const Select = ({
  name = "",
  id = "",
  className = "",
  disabled = false,
  title = "",
  items = [],
  onChange,
}: SelectProps) => {
  return (
    <motion.div
      whileFocus={{ scale: 1.05 }}
      className={`${className} input-hindra text-md flex gap-2 items-center border border-primary/25 relative`}
      title={title}
    >
      <motion.select
        id={id}
        name={name}
        className={
          "login-input w-full outline-none border-none outline-0 ring-0 border-0 focus-visible:ring-0 focus-visible:border-none cursor-pointer px-2 py-1 appearance-none"
        }
        disabled={disabled}
        onChange={onChange}
      >
        {items.map((item, idx) => (
          <motion.option
            key={idx}
            value={item.value}
            id={item?.id}
            disabled={item?.disabled}
            className={`${item.className} cursor-pointer bg-background text-foreground`}
            selected={item?.selected}
          >
            {item.name}
          </motion.option>
        ))}
      </motion.select>
      <ChevronsUpDown className="size-4 absolute right-1" />
    </motion.div>
  );
};

export const InputFile = ({
  label = "Importer vos fichiers (PDF ou image, max 5 Mo)",
  className = "",
  capture,
  allowedTypes = ["image/jpeg", "image/png", "image/webp"], // "application/pdf"
  maxSize = 5, // 5MB
  required = false,
  onFilesChange,
}: FilesUploadProps) => {
  const [error, setError] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files.item(0);
    setError("");

    if (
      !allowedTypes.includes(selectedFile.type) ||
      selectedFile.size > maxSize * 1024 * 1024
    ) {
      let error = "";
      if (!allowedTypes.includes(selectedFile.type))
        error = "Format d'image non valide.";
      if (selectedFile.size > maxSize * 1024 * 1024)
        error = "Taille d'image superieur a la limite.";
      setError(error);
    } else onFilesChange(selectedFile);
  };

  return (
    <motion.div
      whileFocus={{ scale: 1.05 }}
      className={`${className} input-hindra w-fit text-md flex flex-col gap-2 shadow-md p-2`}
    >
      <motion.label className="" htmlFor="file-input">
        {label}
      </motion.label>
      <motion.input
        id="file-input"
        name="file-input"
        required={required}
        capture={capture}
        type="file"
        accept={allowedTypes.join(", ")}
        onChange={handleFileChange}
        className="w-full cursor-pointer border border-primary/25 text-sm py-1 px-2 text-foreground/65"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </motion.div>
  );
};

export const InputFiles = ({
  label = "Importer vos fichiers (PDF ou image, max 5 Mo)",
  capture,
  allowedTypes = ["image/jpeg", "image/png", "image/webp"], // "application/pdf"
  maxSize = 5, // 5MB
  minFiles = 0,
  maxFiles = 5,
  multiple = true,
  required = false,
  onFilesChange,
}: FilesUploadProps) => {
  const [error, setError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        (file) =>
          allowedTypes.includes(file.type) && file.size <= maxSize * 1024 * 1024
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
        const name = `Fichier_${idx + 1}.${ext}`;
        return new File([file], name, { type: file.type });
      });

      onFilesChange(renamedFiles);
    }
    inputRef.current.value = null;
  };

  const editClicked = () => {
    inputRef?.current?.click();
  };

  return (
    <div className="flex flex-col gap-2 file w-full h-full border rounded-md shadow-md p-2">
      <div className="flex gap-4 justify-between w-full">
        <motion.label className="cursor-pointer" htmlFor="files-input">
          {label}
        </motion.label>
        <span role="button" className="cursor-pointer" onClick={editClicked}>
          <span className="sr-only">Click</span>
          <PenBox />
        </span>
      </div>
      <motion.input
        id="files-input"
        name="files-input"
        required={required}
        capture={capture}
        type="file"
        accept={allowedTypes.join(", ")}
        onChange={fileChanged}
        multiple={multiple}
        ref={inputRef}
        className="w-full cursor-pointer hidden"
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export const InputFilesUpload = ({
  label = "Importer vos fichiers (PDF ou image, max 5 Mo)",
  capture,
  allowedTypes = ["image/jpeg", "image/png", "image/webp"], // "application/pdf"
  maxSize = 5, // 5MB
  minFiles = 0,
  maxFiles = 5,
  multiple = true,
  required = false,
  onFilesChange,
}: FilesUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        (file) =>
          allowedTypes.includes(file.type) && file.size <= maxSize * 1024 * 1024
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
        const name = `Fichier_${idx + 1}.${ext}`;
        return new File([file], name, { type: file.type });
      });

      setFiles(renamedFiles);
      onFilesChange(renamedFiles);
    }
    inputRef.current.value = null;
  };

  const editClicked = () => {
    inputRef?.current?.click();
  };

  return (
    <div className="flex flex-col gap-2 file w-full h-full border rounded-md shadow-md p-2">
      <div className="flex gap-4 justify-between w-full">
        <motion.label className="cursor-pointer" htmlFor="files-upload">
          {label}
        </motion.label>
        <span role="button" className="cursor-pointer" onClick={editClicked}>
          <span className="sr-only">Click</span>
          <PenBox />
        </span>
      </div>
      <motion.input
        id="files-upload"
        name="files-upload"
        required={required}
        capture={capture}
        type="file"
        accept={allowedTypes.join(", ")}
        onChange={fileChanged}
        multiple={multiple}
        ref={inputRef}
        className="w-full cursor-pointer hidden"
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {files.length > 0 && (
        <div className="px-2 pb-1">
          <p className="text-sm font-medium text-gray-700">
            Fichiers sélectionnés :
          </p>
          <div className="flex gap-2 flex-wrap items-center">
            {files.map((file, index) => (
              <a
                key={index}
                href={URL.createObjectURL(file)}
                target="_blank"
                rel="noreferrer"
                className="w-20 h-20 text-sm flex items-center justify-center rounded-md border border-gray-300 text-gray-500"
                title={file.name}
              >
                {file.type.startsWith("image") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                ) : (
                  file.name
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const InputFileUpload = ({
  label = "Importer votre fichier (PDF ou image, max 5 Mo)",
  capture,
  allowedTypes = ["image/jpeg", "image/png", "image/webp"], // "application/pdf"
  maxSize = 5, // 5MB
  required = false,
  fileUrl = "",
  onFilesChange,
}: FilesUploadProps) => {
  const [files, setFiles] = useState<File>();
  const [urlFile, setUrlFile] = useState<string>(fileUrl);
  const [error, setError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
      ? Array.from(event.target.files)
      : [];
    if (selectedFiles.length > 0) {
      const validFiles = selectedFiles[0];

      if (
        !allowedTypes.includes(validFiles.type) ||
        validFiles.size > maxSize * 1024 * 1024
      ) {
        if (!allowedTypes.includes(validFiles.type))
          setError("Votre fichier a été rejeté (format non valide).");
        if (validFiles.size > maxSize * 1024 * 1024)
          setError("Votre fichier a été rejeté (taille dépassée).");
      } else {
        setError("");
        setFiles(validFiles);
        setUrlFile(URL.createObjectURL(validFiles));
        onFilesChange(validFiles);
      }
    }
    inputRef.current.value = null;
  };

  const editClicked = () => {
    inputRef?.current?.click();
  };

  return (
    <div className="flex flex-col gap-2 file w-full h-full border rounded-md shadow-md p-2">
      <div className="flex gap-4 justify-between w-full">
        <motion.label className="cursor-pointer" htmlFor="file-upload">
          {label}
        </motion.label>
        <span role="button" className="cursor-pointer" onClick={editClicked}>
          <span className="sr-only">Click</span>
          <PenBox />
        </span>
      </div>
      <motion.input
        id="file-upload"
        name="file-upload"
        required={required}
        capture={capture}
        type="file"
        accept={allowedTypes.join(", ")}
        onChange={fileChanged}
        ref={inputRef}
        className="w-full cursor-pointer hidden"
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {urlFile.length > 0 && (
        <div className="flex gap-2 flex-wrap items-center p-2">
          <a
            href={urlFile}
            target="_blank"
            rel="noreferrer"
            className="w-20 h-20 text-sm flex items-center justify-center rounded-md border border-gray-300 text-gray-500"
            title={files.name}
          >
            {files.type.startsWith("image") ? (
              <Img
                src={urlFile}
                alt={files.name}
                className="w-20 h-20 object-contain rounded-md"
              />
            ) : (
              files.name
            )}
          </a>
        </div>
      )}
    </div>
  );
};

export const TextArea = ({
  name = "",
  cols = 5,
  rows = 5,
  id = "",
  placeholder = "",
  className = "",
  value = "",
  disabled = false,
  title = "",
  onChange,
}: InputProps) => {
  return (
    <motion.div
      whileFocus={{ scale: 1.05 }}
      className={`${className} input-hindra text-md flex gap-2 items-center border border-primary rounded-sm px-2`}
      title={title}
    >
      <motion.textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={
          " login-input w-full outline-none border-none outline-0 ring-0 border-0 focus-visible:ring-0 focus-visible:border-none py-1"
        }
        value={value}
        cols={cols}
        rows={rows}
        disabled={disabled}
        onChange={onChange}
      >
        {value}
      </motion.textarea>
    </motion.div>
  );
};
