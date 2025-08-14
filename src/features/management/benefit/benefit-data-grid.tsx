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
import { Filter, Square, SquareCheck, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import {
  benefits,
  deleteBenefit,
} from "@/store-management/actions/benefit/benefit-actions";
import { Inputs } from "@/components/ui/inputs/input";
import { ConfirmAction } from "@/components/ui/modals/confirm-actions";
import { dataBenefit } from "./data";
import { Link } from "react-router-dom";

const BenefitDataGrid = () => {
  const dispatch = useAppDispatch();

  const benefitsStore = useAppSelector((state) => state.benefits);
  const data =
    benefitsStore.value?.benefits.length > 0
      ? benefitsStore.value?.benefits
      : dataBenefit?.benefits;

  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);
  const [selectAllBenefits, setSelectAllBenefits] = useState<boolean>(false);

  const [openConfirmAction, setOpenConfirmAction] = useState(false);
  const [isAlertConfirmAction, setIsAlertConfirmAction] = useState(false);
  const [deletedBenefits, setDeletedBenefits] = useState([]);
  const [titleConfirmAction, setTitleConfirmAction] = useState<string>("");
  const [descriptionConfirmAction, setDescriptionConfirmAction] =
    useState<React.ReactNode>("");

  const [isCall, setIsCall] = useState(false);
  useEffect(() => {
    if (!isCall) {
      dispatch(benefits());
      setIsCall(true);
    }
  }, [isCall, dispatch]);

  const onClose = () => {
    setOpenConfirmAction(false);
    setTimeout(() => {
      setIsAlertConfirmAction(false);
    }, 500);
  };
  const onSubmitConfirmActionSubmit = () => {
    dispatch(deleteBenefit({ id: deletedBenefits }));
    onClose();
  };
  const handleSelectBenefit = (id: string) => {
    let benefits = [...selectedBenefits];
    benefits =
      benefits.filter((selCat) => id === selCat).length === 0
        ? [...selectedBenefits, id]
        : benefits;
    setSelectedBenefits(benefits);
  };

  const handleSelectAllBenefits = () => {
    if (data.length !== selectedBenefits.length) {
      const benefits: string[] = [];
      data.forEach((d) => {
        benefits.push(d.id);
      });
      setSelectedBenefits(benefits);
      setSelectAllBenefits(true);
    } else {
      setSelectedBenefits([]);
      setSelectAllBenefits(false);
    }
  };
  const handleDeleteBenefit = (id: string, name: string = "") => {
    console.log("Supprimer la prestation : ", id);
    if (id.length > 0) {
      setDeletedBenefits([id]);
      setTitleConfirmAction("Supprimer la prestation " + name);
      setDescriptionConfirmAction(
        <span className="flex gap-1 items-end">
          Voulez-vous vraiment supprimer la prestation <b>{name}</b>
        </span>
      );
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

  const handleDeleteBenefits = () => {
    console.log(
      "Supprimer les prestations de service suivantes : ",
      selectedBenefits
    );
    if (selectedBenefits.length > 0) {
      setDeletedBenefits(selectedBenefits);
      setTitleConfirmAction("Supprimer plusieurs prestations de service ");
      setDescriptionConfirmAction(
        "Voulez-vous vraiment supprimer toutes ces prestations de service "
      );
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

  window.document.title = "Benefit - " + appName;

  return (
    <div className="form-login h-ful mx-auto flex flex-col gap-4 pe-2">
      <legend className="text-center text-xl font-medium mb-2">
        Gestion de vos differentes prestations
      </legend>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link
            to={"../benefit/edit/000-00-000-0000"}
            className="py-2 rounded-md cursor-pointer flex items-center gap-1 overflow-hidden bg-blue-800 text-white shadow-xs hover:bg-blue-800/90 hover:scale-105 h-9 px-4 has-[>svg]:px-3"
          >
            Add
          </Link>

          <Button variant="destructive" onClick={handleDeleteBenefits}>
            Delete
          </Button>
        </div>
        <div className="flex items-center gap-5 justify-end">
          <span className="flex items-center gap-2">
            <Filter />
            Filters
          </span>
          <div className="search flex items-center gap-2">
            <Inputs type="search" className="w-full max-w-" />
            <Button>Search</Button>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center mx-auto" align="center">
              <span
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleSelectAllBenefits}
              >
                {selectAllBenefits ? <SquareCheck /> : <Square />}
              </span>
            </TableHead>
            <TableHead>Titre</TableHead>
            <TableHead>Categorie</TableHead>
            <TableHead>Prix</TableHead>
            <TableHead>Emplacement</TableHead>
            <TableHead className="text-center mx-auto" align="center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((benefit, idx) => (
            <TableRow key={idx}>
              <TableCell className="text-center mx-auto" align="center">
                {selectedBenefits?.some((s) => s === benefit.id) ? (
                  <SquareCheck
                    className="cursor-pointer"
                    onClick={() => handleSelectBenefit(benefit.id)}
                  />
                ) : (
                  <Square
                    className="cursor-pointer"
                    onClick={() => handleSelectBenefit(benefit.id)}
                  />
                )}
              </TableCell>
              <TableCell>{benefit?.title}</TableCell>
              <TableCell>{benefit?.category}</TableCell>
              <TableCell>{benefit?.price}</TableCell>
              <TableCell>{benefit?.location}</TableCell>
              <TableCell
                className="flex items-center gap-3 justify-center"
                align="center"
              >
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteBenefit(benefit.id, benefit.title)}
                >
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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

export default BenefitDataGrid;
