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
import { updateCategory } from "@/store-management/actions/category/category-actions";

export const CategoryModal = ({
  category,
  setCategory,
  open,
  onClose,
  onCategorySuccess,
}: CategoryModalProps) => {
  const dispatch = useAppDispatch();

  const categoryStore = useAppSelector((state) => state.category);

  const updateCategoryStore = useAppSelector((state) => state.updateCategory);
  const [errors, setErrors] = useState<Partial<Category>>({
    title: "",
    description: "",
    picture: "",
  });
  const [editCategoryState, setEditCategoryState] =
    useState<UpdateCategoryCommand>({id: categoryStore?.value?.id, title: categoryStore?.value?.title, description: categoryStore?.value?.description, picture: null});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ title: "", description: "", picture: "" });
    console.log("Categorie : ", category);
    onCategorySuccess();
    
    const formData = new FormData();
    formData.append("id", editCategoryState?.id||null)
    formData.append("title", editCategoryState.title)
    formData.append("picture", null)
    formData.append("description", editCategoryState.description)
    dispatch(updateCategory(formData));
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
              />
            </div>
            <div className="w-full flex items-center justify-end gap-2">
              <Button
                type="button"
                className={"w-32"}
                onClick={onClose}
                disabled={updateCategoryStore.pending}
              >
                Annuler
              </Button>

              <Button
                disabled={updateCategoryStore.pending}
                type="submit"
                className={"w-32"}
              >
                {updateCategoryStore.pending
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
