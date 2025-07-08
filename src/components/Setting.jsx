import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function Setting({ onNext }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log("data", data);
    reset();
  };

  return (
    <div className="form-interest">
      <form onSubmit={handleSubmit(onsubmit)} className="form">
        <label>
          Country
          <br />
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
              </select>
            )}
          />
        </label>
        {errors.gender && <span>{errors.gender.message}</span>}
        <br />
        <label>
          <Controller
            name="subscribe"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <input
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
          Subscribe to our newsletter
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
