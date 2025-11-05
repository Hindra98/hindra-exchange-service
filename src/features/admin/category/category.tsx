import { appName } from "@/core/constants/common-constants";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/buttons/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PenSquare, Square, SquareCheck, Trash2 } from "lucide-react";
import { CategoryModal } from "./categoryModal";
import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import {
  categories,
  deleteCategory,
} from "@/store-management/actions/category/category-actions";
import { Inputs } from "@/components/ui/inputs/input";
import { ConfirmAction } from "@/components/ui/modals/confirm-actions";
import { formatDate, serializeDate } from "@/core/text/date-format";
import { Img } from "@/components/ui/img/img";

const Category = () => {
  const dispatch = useAppDispatch();

  const categoriesStore = useAppSelector((state) => state.categories);
  const [categoryData, setCategoryData] = useState(
    categoriesStore.value || null
  );

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectAllCategories, setSelectAllCategories] =
    useState<boolean>(false);

  const [editCategoryState, setEditCategoryState] = useState<Category>(null);
  const [open, setOpen] = useState(false);
  const [openConfirmAction, setOpenConfirmAction] = useState(false);
  const [isAlertConfirmAction, setIsAlertConfirmAction] = useState(false);
  const [deletedCategories, setDeletedCategories] = useState([]);

  const [titleConfirmAction, setTitleConfirmAction] = useState<string>("");
  const [descriptionConfirmAction, setDescriptionConfirmAction] =
    useState<React.ReactNode>("");
  const [search, setSearch] = useState("");

  const [isCall, setIsCall] = useState(false);
  useEffect(() => {
    if (
      !isCall &&
      !categoriesStore.pending &&
      categoriesStore.value.message === ""
    ) {
      dispatch(categories());
      setIsCall(true);
    }
  }, [isCall, dispatch, categoriesStore]);

  useEffect(() => {
    setCategoryData(categoriesStore.value);
  }, [categoriesStore, categoriesStore.value]);

  const onClose = () => {
    setOpen(false);
    setOpenConfirmAction(false);
    setTimeout(() => {
      setIsAlertConfirmAction(false);
    }, 500);
  };
  const onSubmitConfirmActionSubmit = () => {
    dispatch(deleteCategory({ id: deletedCategories }));
    onClose();
  };
  const onCategorySuccess = () => {
    const category = [...categoryData.categories];
    if (category?.some((s) => s.id === editCategoryState.id)) {
      // Edit
      setCategoryData({
        ...categoryData,
        categories: [
          ...categoryData.categories.map((c) =>
            c.id === editCategoryState.id ? editCategoryState : c
          ),
        ],
      });
    } else {
      // Add
      setCategoryData({
        ...categoryData,
        categories: [
          ...categoryData.categories,
          {
            ...editCategoryState,
            id: v4(),
            updated_at: new Date().toUTCString(),
          },
        ],
      });
    }
    setOpen(false);
  };

  const handleSelectCategory = (id: string) => {
    let categories = [...selectedCategories];
    categories =
      categories.filter((selCat) => id === selCat).length === 0
        ? [...selectedCategories, id]
        : categories;
    setSelectedCategories(categories);
  };

  const handleSelectAllCategories = () => {
    if (categoryData.categories.length !== selectedCategories.length) {
      const categories: string[] = [];
      categoryData.categories.forEach((d) => {
        categories.push(d.id);
      });
      setSelectedCategories(categories);
      setSelectAllCategories(true);
    } else {
      setSelectedCategories([]);
      setSelectAllCategories(false);
    }
  };

  const handleEditCategory = (category: Category = null) => {
    console.log("Editer la categorie : ", category);
    setEditCategoryState(category);
    setOpen(true);
  };

  const handleDeleteCategory = (id: string, name: string = "") => {
    console.log("Supprimer la categorie : ", id);
    if (id.length > 0) {
      setTitleConfirmAction("Supprimer la categorie " + name);
      setDescriptionConfirmAction(
        "Voulez-vous vraiment supprimer la categorie " + name
      );
      setDeletedCategories([id]);
      setOpenConfirmAction(true);
    } else {
      setIsAlertConfirmAction(true);

      setTitleConfirmAction("Erreur!");
      setDescriptionConfirmAction(
        <>
          <h2>Erreur lors de la suppression</h2>
          <span>Une erreur est survenue lors de la suppression.</span>
          <b>Veuillez réessayer</b>
        </>
      );
      setOpenConfirmAction(true);
    }
  };

  const handleDeleteCategories = () => {
    console.log("Supprimer les categories suivantes : ", selectedCategories);
    if (selectedCategories.length > 0) {
      setTitleConfirmAction("Supprimer plusieurs categories");
      setDescriptionConfirmAction(
        "Voulez-vous vraiment supprimer toutes ces categories"
      );
      setDeletedCategories(selectedCategories);
      setOpenConfirmAction(true);
    } else {
      setIsAlertConfirmAction(true);
      setTitleConfirmAction("Erreur!");
      setDescriptionConfirmAction(
        <>
          <h2>Erreur lors de la suppression</h2>
          <span>
            Vous devrez selectionner au moins un element pour pouvoir supprimer{" "}
          </span>
        </>
      );
      setOpenConfirmAction(true);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Recherche: ", search);
  };

  window.document.title = "Category - " + appName;

  return (
    <div className="form-login h-ful mx-auto flex flex-col gap-4 pe-2">
      <legend className="text-center text-xl font-medium mb-2">
        Gestion des catégories de prestations
      </legend>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Button variant="blue" onClick={handleEditCategory}>
            Add
          </Button>

          <Button variant="destructive" onClick={handleDeleteCategories}>
            Delete
          </Button>
        </div>

        <form className="flex items-center gap-5" onSubmit={handleSearch}>
          <Inputs
            type="search"
            className="w-full"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button type="submit" className="min-w-fit">
            Search
          </Button>
        </form>
      </div>
      <Table>
        <TableCaption>Une legende pour notre grille de donnees</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center mx-auto" align="center">
              <span
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleSelectAllCategories}
              >
                {selectAllCategories ? <SquareCheck /> : <Square />}
              </span>
            </TableHead>
            <TableHead>Illustration</TableHead>
            <TableHead>Names</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Derniere modification</TableHead>
            <TableHead className="text-center mx-auto" align="center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categoryData?.categories.map((category, idx) => (
            <TableRow key={idx}>
              <TableCell className="text-center mx-auto" align="center">
                {selectedCategories?.some((s) => s === category.id) ? (
                  <SquareCheck
                    className="cursor-pointer"
                    onClick={() => handleSelectCategory(category.id)}
                  />
                ) : (
                  <Square
                    className="cursor-pointer"
                    onClick={() => handleSelectCategory(category.id)}
                  />
                )}
              </TableCell>
              <TableCell>
                <Img
                  src={category?.picture}
                  alt={category?.title}
                  className="size-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>{category?.title}</TableCell>
              <TableCell>{category?.description}</TableCell>
              <TableCell>
                {formatDate(serializeDate(new Date(category?.updated_at)))}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-3">
                  <Button
                    variant="blue"
                    onClick={() => handleEditCategory(category)}
                  >
                    <PenSquare />
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() =>
                      handleDeleteCategory(category.id, category.title)
                    }
                  >
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CategoryModal
        open={open}
        onClose={onClose}
        setCategory={setEditCategoryState}
        onCategorySuccess={onCategorySuccess}
        category={editCategoryState}
      />

      <ConfirmAction
        open={openConfirmAction}
        isAlert={isAlertConfirmAction}
        onClose={onClose}
        onHandleSubmit={onSubmitConfirmActionSubmit}
        title={titleConfirmAction}
        description={descriptionConfirmAction}
      />
    </div>
  );
};

export default Category;
