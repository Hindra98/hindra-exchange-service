import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/core/hooks/core-hooks";
import * as Yup from "yup";
import { Button } from "@/components/ui/buttons/button";
import { Inputs } from "@/components/ui/inputs/input";
import { FaSpinner } from "react-icons/fa";
import { Phone } from "lucide-react";
import { updatePhone } from "@/store-management/actions/profile/profile-actions";

const UpdatePhone = () => {
  const dispatch = useAppDispatch();

  const profileUserStoreValue = useAppSelector(
    (state) => state.profileUser.value
  );
  const updatePhoneStore = useAppSelector((state) => state.updatePhone);

  const schema = Yup.object().shape({
    phone: Yup.string(),
    confirmPhone: Yup.string(),
  });

  const [phoneViewModel, setPhoneViewModel] = useState<UpdatePhoneCommand>({
    phone: profileUserStoreValue.phone,
    confirmPhone: profileUserStoreValue.phone,
  });

  const [errors, setErrors] = useState({
    phone: "",
    confirmPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPhoneViewModel({
      ...phoneViewModel,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ phone: "", confirmPhone: "" });

    const values = await schema.validate(phoneViewModel);

    if (values.confirmPhone !== values.phone || values.phone === "") {
      let confirmPhone = "",
        phone = "";
      if (values.phone === "")
        phone = "Vous devez renseigner un numero de telephone valide";
      if (values.confirmPhone !== values.phone)
        confirmPhone =
          "Le numero de telephone et la confirmation sont differents";
      setErrors({
        phone: phone,
        confirmPhone: confirmPhone,
      });
    } else {
      console.log("phoneViewModel: ", phoneViewModel);
      dispatch(updatePhone(phoneViewModel));
    }
  };

  return (
    <form
      id=""
      className="w-full flex flex-col gap-4 py-2"
      onSubmit={handleSubmit}
    >
      <div className="phone w-full flex flex-col gap-1">
        <label htmlFor="phone">Numero de telephone</label>
        {errors.phone && <div className="error">{errors.phone.toString()}</div>}
        <Inputs
          id="phone"
          name="phone"
          icon={<Phone />}
          placeholder={"Numero de telephone"}
          className={(errors.phone && "error") + " max-w-72"}
          value={phoneViewModel.phone}
          onChange={handleChange}
        />
      </div>
      <div className="confirmPhone w-full flex flex-col gap-1">
        <label htmlFor="confirmPhone">
          Confirmation du numero de telephone
        </label>
        {errors.confirmPhone && (
          <div className="error">{errors.confirmPhone.toString()}</div>
        )}
        <Inputs
          id="confirmPhone"
          name="confirmPhone"
          icon={<Phone />}
          placeholder={"Confirmation du numero de telephone"}
          className={(errors.confirmPhone && "error") + " max-w-72"}
          value={phoneViewModel.confirmPhone}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        className={"w-full md:w-fit"}
        disabled={updatePhoneStore?.pending}
      >
        {updatePhoneStore?.pending && <FaSpinner className="animate-spin" />}
        Sauvegarder
      </Button>
    </form>
  );
};

export default UpdatePhone;
