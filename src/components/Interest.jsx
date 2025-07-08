import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FormContext } from "../formContext";
import { useContext } from "react";

export default function Interest({ onNext }) {
  const { formData, updateForm, updateStep } = useContext(FormContext);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: formData.gender,
      hobby: formData.hobby,
    },
  });

  const onsubmit = (data) => {
    updateForm(data);
    updateStep(2);
    onNext();
    reset();
  };

  return (
    <div className="form-interest">
      <form onSubmit={handleSubmit(onsubmit)} className="form">
        <label>
          Gender
          <br />
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <label>
                  <input
                    type="radio"
                    value="male"
                    checked={field.value === "male"}
                    onChange={field.onChange}
                  />
                  Male
                </label>

                <label>
                  <input
                    type="radio"
                    value="female"
                    checked={field.value === "female"}
                    onChange={field.onChange}
                  />
                  Female
                </label>

                <label>
                  <input
                    type="radio"
                    value="other"
                    checked={field.value === "other"}
                    onChange={field.onChange}
                  />
                  Other
                </label>
              </>
            )}
          />
        </label>
        {errors.gender && <span>{errors.gender.message}</span>}
        <br />
        <label>
          Hobby
          <Controller
            name="hobby"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <div className="hobby-div">
                {["Music", "Reading", "Sports"].map((hobby) => (
                  <label key={hobby} style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      value={hobby}
                      checked={field.value.includes(hobby)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          field.onChange([...field.value, hobby]);
                        } else {
                          field.onChange(
                            field.value.filter((item) => item !== hobby)
                          );
                        }
                      }}
                    />
                    {hobby}
                  </label>
                ))}
              </div>
            )}
          />
        </label>
        <input type="submit" value="Save & Next" />
      </form>
    </div>
  );
}
