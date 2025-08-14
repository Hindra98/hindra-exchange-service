import { useEffect, useState } from "react";

import * as Yup from "yup";
import { InputFiles, Inputs, TextArea } from "@/components/ui/inputs/input";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import {
  benefit,
  updateBenefit,
} from "@/store-management/actions/benefit/benefit-actions";
import { Button } from "@/components/ui/buttons/button";
import { useParams } from "react-router-dom";
import { isNumber } from "@/core/text/regex";
import { Calendar } from "@/components/ui/calendar";
import { fr } from "date-fns/locale";
import { format } from "date-fns";
import { Img } from "@/components/ui/img/img";
import { FaTimes } from "react-icons/fa";

const BenefitPersistComponent = () => {
  const dispatch = useAppDispatch();
  const { idBenefit } = useParams();

  const schema = Yup.object().shape({
    title: Yup.string(),
    category: Yup.string(),
    price: Yup.string(),
  });

  const benefitStore = useAppSelector((state) => state.benefit);
  const updateBenefitStore = useAppSelector((state) => state.updateBenefit);

  const [date, setDate] = useState<Date | undefined>(new Date("10/06/2015"));

  const [benefitViewModel, setBenefitViewModel] =
    useState<UpdateBenefitCommand>({
      id: "",
      title: "",
      description: "",
      category: "",
      price: "",
      location: "",
      avaibility: "",
      pictures: [],
      picturesStore: [],
    });
  const [errors, setErrors] = useState<Partial<Benefit>>({
    title: "",
    category: "",
    price: "",
  });
  const [isCall, setIsCall] = useState(false);
  useEffect(() => {
    if (!isCall) {
      dispatch(benefit({ id: idBenefit }));
      setIsCall(true);
    }
  }, [isCall, idBenefit, dispatch]);
  useEffect(() => {
    setBenefitViewModel({
      id: benefitStore?.value?.id,
      title: benefitStore?.value?.title,
      description: benefitStore?.value?.description,
      category: benefitStore?.value?.category,
      price: benefitStore?.value?.price,
      location: benefitStore?.value?.location,
      avaibility: benefitStore?.value?.avaibility,
      pictures: [],
      picturesStore: benefitStore?.value?.pictures,
    });
  }, [benefitStore]);

  const handleChange = (e) => {
    setBenefitViewModel({
      ...benefitViewModel,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const handleFileChange = (filesChanged: File[]) => {
    setBenefitViewModel({
      ...benefitViewModel,
      pictures: filesChanged,
    });
  };
  const handleRemoveFile = (file: File) => {
    const filesBenefit: File[] = benefitViewModel.pictures;
    const filterFiles = filesBenefit.filter((f) => f.name !== file.name);
    setBenefitViewModel({
      ...benefitViewModel,
      pictures: filterFiles,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ title: "", category: "" });

    const values = await schema.validate(benefitViewModel);

    if (
      values.title === "" ||
      values.category === "" ||
      values.price === "" ||
      !isNumber(values.price)
    ) {
      let title = "",
        category = "",
        price = "";
      if (values.title === "") title = "Vous devez renseigner un titre";
      if (!isNumber(values.price))
        price = "Vous devez renseigner une valeur valide de prix";
      if (values.price === "") price = "Vous devez renseigner un prix";
      if (values.category === "")
        category = "Vous devez renseigner une catégorie";

      setErrors({
        category: category,
        title: title,
        price: price,
      });
    } else {
      dispatch(
        updateBenefit({
          ...benefitViewModel,
          avaibility: format(date, "P", { locale: fr }),
        })
      );
    }
  };
  return (
    <section>
      Persistance des donnees de prestations
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="title w-full flex flex-col gap-1">
            <label htmlFor="title">Titre</label>
            <Inputs
              id="title"
              name="title"
              placeholder="Titre..."
              className={errors.title && "error"}
              value={benefitViewModel?.title}
              onChange={handleChange}
            />
            {errors.title && (
              <div className="error">{errors.title.toString()}</div>
            )}
          </div>
          <div className="category w-full flex flex-col gap-1">
            <label htmlFor="category">Catégorie</label>
            <Inputs
              id="category"
              name="category"
              placeholder="Catégorie..."
              className={errors.category && "error"}
              value={benefitViewModel?.category}
              onChange={handleChange}
            />
            {errors.category && (
              <div className="error">{errors.category.toString()}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="price w-full flex flex-col gap-1">
            <label htmlFor="price">Prix</label>
            <Inputs
              id="price"
              name="price"
              placeholder="Prix..."
              className={errors.price && "error"}
              value={benefitViewModel?.price}
              onChange={handleChange}
            />
            {errors.price && (
              <div className="error">{errors.price.toString()}</div>
            )}
          </div>
          <div className="location w-full flex flex-col gap-1">
            <label htmlFor="location">Emplacement</label>
            <Inputs
              id="location"
              name="location"
              placeholder="Emplacement..."
              className={""}
              value={benefitViewModel?.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="description w-full flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <TextArea
            id="description"
            name="description"
            placeholder="Description..."
            className=""
            value={benefitViewModel?.description}
            onChange={(e) =>
              setBenefitViewModel({
                ...benefitViewModel,
                description: e.target.value,
              })
            }
          />
        </div>

        <div className="avaibility w-full flex flex-col gap-1">
          <label htmlFor="avaibility">Disponibilité</label>
          <Calendar
            mode="single"
            id="avaibility"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-fit"
            locale={fr}
            fromDate={new Date()}
          />
          {date && (
            <p className="text-sm mt-2">
              Disponible : {format(date, "PPPP", { locale: fr })}
            </p>
          )}
        </div>

        <div className="pictures w-full flex flex-col gap-1">
          <InputFiles
            label="Selectionner vos images (max 5Mo)"
            multiple={true}
            onFilesChange={handleFileChange}
            maxFiles={10}
          />
          {(benefitViewModel?.pictures.length > 0 ||
            benefitViewModel?.picturesStore.length > 0) && (
            <div className="flex items-center gap-2 flex-wrap">
              {benefitViewModel?.pictures.length > 0
                ? benefitViewModel?.pictures?.map((fileIndex, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-md overflow-hidden shadow-md w-44 h-52"
                    >
                      <Img
                        src={URL.createObjectURL(fileIndex)}
                        alt={fileIndex.name}
                        className="object-cover w-full h-full overflow-hidden"
                      />
                      <div
                        role="button"
                        onClick={() => handleRemoveFile(fileIndex)}
                        className="absolute cursor-pointer top-1 right-1 z-10 size-8 flex justify-center items-center bg-background text-foreground rounded-full p-2 text-lg"
                      >
                        <FaTimes />
                      </div>
                    </div>
                  ))
                : benefitViewModel?.picturesStore?.map((fileIndex, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-md overflow-hidden shadow-md w-32 h-52"
                    >
                      <Img
                        src={fileIndex}
                        alt={fileIndex}
                        className="object-cover w-full h-full overflow-hidden"
                      />
                      <div
                        role="button"
                        className="absolute cursor-pointer top-1 right-1 z-10 size-8 flex justify-center items-center bg-background text-foreground rounded-full p-2 text-lg"
                      >
                        <FaTimes />
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
        <div className="w-full flex items-center justify-end gap-2">
          <Button
            type="button"
            className={"w-32"}
            disabled={updateBenefitStore.pending}
          >
            Annuler
          </Button>
          <Button
            disabled={updateBenefitStore.pending}
            type="submit"
            className={"w-32"}
          >
            Valider
          </Button>
        </div>
      </form>
    </section>
  );
};
export default BenefitPersistComponent;
