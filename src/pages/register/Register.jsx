import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "../login/Login.style";
import meal from "../../assets/meal.svg";

const Register = ({log,setLog}) => {
  const navigate = useNavigate();

  const userInfo = {
    username: "admin",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
  };
  return (
    <div>
      <LoginContainer>
        <FormContainer>
          <StyledImg src={meal} />
          <Header>{"<CW/>"}Recipe</Header>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput placeholder="Enter username" type="text" />
            <StyledInput placeholder="Enter Password" type="password" />
            <StyledInput placeholder="Password Again" type="password" />
            <StyledButton type="submit" onClick={()=> setLog("Logout")}>Register</StyledButton>
          </StyledForm>
        </FormContainer>
      </LoginContainer>
    </div>
  );
};

export default Register;
