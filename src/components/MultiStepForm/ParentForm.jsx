import React from "react";
import { useState } from "react";
import { UserDetailsForm } from "./UserDetailsForm";
import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { Confirm } from "./Confirm";
import { Success } from "./Success";

export const ParentForm = () => {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    bio: "",
    city: "",
  });

  const nextStep = () => {
    setState({ ...state, step: state.step + 1 });
  };

  const prevStep = () => {
    setState({ ...state, step: state.step - 1 });
  };

  const handleChange = (e) => {
    console.log("called");
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { step } = state;
  const { firstName, lastName, email, occupation, bio, city } = state;
  const values = { firstName, lastName, email, occupation, bio, city };

  switch (step) {
    case 1:
      return (
        <UserDetailsForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <PersonalDetailsForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 4:
      return <Success />;
  }
};
