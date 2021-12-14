import { FC } from "react";
import style from "../GuestForm.module.scss";
import {
  FieldErrors,
  FieldValues,
  FormState,
  UseFormRegister,
} from "react-hook-form";

const CustomInput: FC<{
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  inputName: string;
  label: string;
}> = ({ errors, register, inputName, label }) => {
  return (
    <>
      <label className={style.label} htmlFor={`${inputName}`}>
        {label}
      </label>
      <input 
        className={style.input}
        id={`${inputName}`}
        {...register(`${inputName}`)}
      />
      <p className={style.errorMessage}>{errors[inputName]?.message}</p>
    </>
  );
};

export default CustomInput;
