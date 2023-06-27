import React from "react";
import Container from "../../components/custom components/defaults/Container";
import CustomForm from "../../components/custom components/forms/CustomForm";

export default function SignUp() {
  return (
    <div>
      <Container>
        <CustomForm
          formTitle="Sign Up"
          inputProps={[
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "Email",
            },
          ]}
        />
      </Container>
    </div>
  );
}
