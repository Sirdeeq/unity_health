import React from "react";
import CustomCard from "../components/custom components/card/CustomCard";
import Container from "../components/custom components/defaults/Container";
import hospitalImg from "../images/img/undraw_Building_re_xfcm.png";
import ngoImg from "../images/img/undraw_Coming_home_re_ausc.png";

export default function SignupLogin() {
  return (
    <div>
      <Container>
        <div className="flex justify-center m-4">
          <CustomCard
            title="Hospital"
            imageSrc={hospitalImg}
            darkMode={false}
            href="/auth/sign_up/hospital"
          />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <CustomCard
            title="NGO"
            imageSrc={ngoImg}
            darkMode={false}
            href="/auth/sign_up/ngo"
          />
        </div>
      </Container>
    </div>
  );
}
