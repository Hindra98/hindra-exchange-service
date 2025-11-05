import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  InputFileUpload,
  Inputs,
  TextArea,
} from "@/components/ui/inputs/input";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import { Button } from "@/components/ui/buttons/button";
import {
  addCategory,
  updateCategory,
} from "@/store-management/actions/category/category-actions";

export const CategoryModal = ({
  category,
  setCategory,
  open,
  onClose,
  onCategorySuccess,
}: CategoryModalProps) => {
  const dispatch = useAppDispatch();

  const updateCategoryStore = useAppSelector((state) => state.updateCategory);
  const addCategoryStore = useAppSelector((state) => state.addCategory);
  const [errors, setErrors] = useState<Partial<Category>>({
    title: "",
    description: "",
    picture: "",
  });
  const [pictureFile, setPictureFile] = useState<File>(null);
  const onChangePicture = (file: File) => {
    setCategory({
      ...category,
      picture: URL.createObjectURL(file),
    });
    setPictureFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ title: "", description: "", picture: "" });
    onCategorySuccess();
    console.log("Data Submit: ", {
      id: category?.id,
      title: category.title,
      picture: pictureFile,
      description: category.description,
    });
    const formData = new FormData();
    formData.append("id", category?.id || null);
    formData.append("title", category.title);
    formData.append("picture", pictureFile);
    formData.append("description", category.description);
    formData.append("destination", "categorie");
    if (category.id) dispatch(updateCategory(formData));
    else dispatch(addCategory(formData));
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-lg">
        <DialogHeader>
          <DialogTitle>
            {category === null || !category?.id
              ? "Ajouter une categorie"
              : "Editer la categorie " + category?.title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription id="booking-modal" className="w-full">
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="title w-full flex flex-col gap-1">
              <label htmlFor="title">Titre</label>
              <Inputs
                id="title"
                name="title"
                placeholder="Titre..."
                className={errors.title && "error"}
                value={category?.title}
                onChange={(e) =>
                  setCategory({
                    ...category,
                    title: e.target.value,
                  })
                }
              />
              {errors.title && (
                <div className="error">{errors.title.toString()}</div>
              )}
            </div>

            <div className="description w-full flex flex-col gap-1">
              <label htmlFor="description">Description</label>
              <TextArea
                id="description"
                name="description"
                placeholder="Description..."
                className={errors.description && "error"}
                value={category?.description}
                onChange={(e) =>
                  setCategory({
                    ...category,
                    description: e.target.value,
                  })
                }
              />
            </div>

            <div className="description w-full flex flex-col gap-1">
              <label htmlFor="description">Image representative</label>
              <InputFileUpload
                label="Selectionner une image (max 5Mo)"
                fileUrl={category?.picture}
                onFilesChange={onChangePicture}
              />
            </div>
            <div className="w-full flex items-center justify-end gap-2">
              <Button
                type="button"
                className={"w-32"}
                onClick={onClose}
                disabled={
                  updateCategoryStore.pending || addCategoryStore.pending
                }
              >
                Annuler
              </Button>

              <Button
                disabled={
                  updateCategoryStore.pending || addCategoryStore.pending
                }
                type="submit"
                className={"w-32"}
              >
                {updateCategoryStore.pending || addCategoryStore.pending
                  ? "Enregistrement en cours..."
                  : "Valider"}
              </Button>
            </div>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
