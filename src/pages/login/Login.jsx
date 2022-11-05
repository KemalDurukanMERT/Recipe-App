import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import meal from "../../assets/meal.svg";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventdefault();
    navigate(-1)
  }


  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<CW/>"}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Enter username" type="text"/>
          <StyledInput placeholder="Enter password" type="password"/>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
