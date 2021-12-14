import { FC } from "react";
import style from "./GuestForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema, verifyRegistred } from "./helpers";
import CustomInput from "./CustomInput/CustomInput";
import { Guest, RootObject } from "../../../interfaces/events";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const GuestForm: FC<{ data: RootObject }> = ({ data }) => {

  console.log("GUEST LIST",data.eventInfoData.guests);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (newGuest: Guest) => {
    verifyRegistred(data.eventInfoData.guests, newGuest.email)
      ? toast("Email already registered !", {
          duration: 4000,
          icon: "🚩",
          style: { backgroundColor: "tomato", color: "white" },
        })
      : data.eventInfoData.guests.push(newGuest) &&
        (await axios.put(`/events/${data.id}`, data)) &&
        toast("Register Successfull", {
          duration: 4000,
          icon: "🎉",
          style: { backgroundColor: "seagreen", color: "white" },
        }) &&
        reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <span>¡Register and reserve your place now!</span>

      <Toaster />

      <CustomInput
        inputName="name"
        label="Name"
        register={register}
        errors={errors}
      />

      <CustomInput
        inputName="lastname"
        label="Last Name"
        register={register}
        errors={errors}
      />

      <CustomInput
        inputName="email"
        label="Email"
        register={register}
        errors={errors}
      />

      <label className={style.label} htmlFor="country">
        Country
      </label>
      <select className={style.input} {...register("country")}>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
      <p className={style.errorMessage}>{errors.country?.message}</p>

      <CustomInput
        inputName="phone"
        label="Phone"
        register={register}
        errors={errors}
      />

      <CustomInput
        inputName="job"
        label="Job"
        register={register}
        errors={errors}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default GuestForm;
