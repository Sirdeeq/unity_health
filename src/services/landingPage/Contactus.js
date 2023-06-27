import React from "react";
import CustomContact from "../../components/custom components/forms/CustomContact";
import Container from "../../components/custom components/defaults/Container";

export default function Contactus() {
  return (
    <div>
      <Container>
        <hr />
        <CustomContact
          title="Let's talk!"
          description="Get in touch with us for inquiries and assistance."
          nameLabel="Full name"
          emailLabel="Email"
          messageLabel="Message"
          buttonText="Send Message"
          darkMode={false}
        />
      </Container>
    </div>
  );
}
