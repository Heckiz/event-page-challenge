import { FC } from "react";
import style from "./GuestForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { guestData, validationSchema } from "./helpers";
import CustomInput from "./CustomInput";

const GuestForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = (data: guestData) => console.log(data);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default GuestForm;
