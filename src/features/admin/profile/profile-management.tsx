import { appName } from "@/core/constants/common-constants";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/buttons/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dataCategory } from "./data";
import { PenSquare, Square, SquareCheck, Trash2 } from "lucide-react";
import { CategoryModal } from "./categoryModal";
import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import {
  categories,
  deleteCategory,
} from "@/store-management/actions/category/category-actions";
import { Inputs } from "@/components/ui/inputs/input";

const ProfileManagement = () => {
  const dispatch = useAppDispatch();

  const categoriesStore = useAppSelector((state) => state.categories);
  const [data, setData] = useState(categoriesStore.value ?? dataCategory);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectAllCategories, setSelectAllCategories] =
    useState<boolean>(false);

  const [editCategoryState, setEditCategoryState] = useState<Category>(null);
  const [open, setOpen] = useState(false);

  const [get, setGet] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!get) {
      dispatch(categories());
      setGet(true);
    }
  }, [get, dispatch]);

  const onClose = () => {
    setOpen(false);
  };
  const onCategorySuccess = () => {
    const category = [...data.categories];
    if (category?.some((s) => s.id === editCategoryState.id)) {
      // Edit
      setData({
        ...data,
        categories: [
          ...data.categories.map((c) =>
            c.id === editCategoryState.id ? editCategoryState : c
          ),
        ],
      });
    } else {
      // Add
      setData({
        ...data,
        categories: [...data.categories, { ...editCategoryState, id: v4() }],
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
    if (data.categories.length !== selectedCategories.length) {
      const categories: string[] = [];
      data.categories.forEach((d) => {
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

  const handleDeleteCategory = (id: string) => {
    console.log("Supprimer la categorie : ", id);
    dispatch(deleteCategory({ id: [id] }));
  };

  const handleDeleteCategories = () => {
    console.log("Supprimer les categories suivantes : ", selectedCategories);
    dispatch(deleteCategory({ id: selectedCategories }));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Recherche: ", search);
  };

  window.document.title = "Gestion des utilisateurs - " + appName;

  return (
    <div className="form-login h-ful mx-auto flex flex-col gap-4 pe-2 overflow-hidden">
      <legend className="text-center text-xl font-medium mb-2">
        Gestion des utilisateurs
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
            <TableHead>Identifiant</TableHead>
            <TableHead>Names</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Derniere modification</TableHead>
            <TableHead className="text-center mx-auto" align="center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(categoriesStore.value ?? data)?.categories.map((category, idx) => (
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
              <TableCell>{category?.id}</TableCell>
              <TableCell>{category?.title}</TableCell>
              <TableCell>{category?.description}</TableCell>
              <TableCell>{category?.updated_at}</TableCell>
              <TableCell
                className="flex items-center gap-3 justify-center"
                align="center"
              >
                <Button
                  variant="blue"
                  onClick={() => handleEditCategory(category)}
                >
                  <PenSquare />
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  <Trash2 />
                </Button>
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
    </div>
  );
};

export default ProfileManagement;
