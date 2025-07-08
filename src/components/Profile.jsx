import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { FormContext } from "../formContext";

const profitSchema = yup.object().shape({
  name: yup.string().required("Name is required").max(50).min(2),
  age: yup
    .number()
    .required("Age is required")
    .typeError("Age must be a number")
    .min(18, "Must be at least 18")
    .max(100, "Must be below 100"),
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email"),
});

export default function Profile({ onNext }) {
  const { formData, updateForm, updateStep } = useContext(FormContext);
  console.log("formData>>>>>", formData);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: formData.name,
      age: formData.age,
      email: formData.email,
    },
    resolver: yupResolver(profitSchema),
  });

  const onsubmit = (data) => {
    // console.log("data", data);
    updateForm(data);
    updateStep(1);
    onNext();
    reset();
  };

  return (
    <div className="form">
      <div className="">Profile</div>
      <form onSubmit={handleSubmit(onsubmit)} className="form">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type="text" placeholder="Enter Name" {...field} />
          )}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <Controller
          name="age"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type="number" placeholder="Enter Age" {...field} />
          )}
        />
        {errors.age && <span>{errors.age.message}</span>}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type="email" placeholder="Enter Email" {...field} />
          )}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input type="submit" value="Save & Next" />
      </form>
    </div>
  );
}
