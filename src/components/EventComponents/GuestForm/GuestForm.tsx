import { FC } from "react";
import style from "./GuestForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {  validationSchema } from "./helpers";
import CustomInput from "./CustomInput";
import { Guest } from "../../../interfaces/events";

const GuestForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data: Guest) => console.log(data);

  return (
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

      <span>¡Register and reserve your place now!</span>

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

        <CustomInput
          inputName="country"
          label="Country"
          register={register}
          errors={errors}
        />

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
