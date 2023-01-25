import styled from "styled-components";

export const Main = styled.div``;

export const AboutMe = styled.div`
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const Left = styled.div`
  width: 30%;
  min-width: 400px;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const Image = styled.div`
  max-width: 450px;
  img {
    object-fit: contain;
    max-width: 400px;
    border-radius: 50px;
  }
`;
export const Header = styled.div``;
export const Subtitle = styled.div``;
export const Contact = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Github = styled.div`
  font-size: 150%;
  a {
    color: inherit;
  }
`;
export const LinkedIn = styled.div`
  font-size: 150%;
  a {
    color: inherit;
  }
`;
export const Right = styled.div`
  padding: 4rem;
  width: 70%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;
export const Description = styled.div`
  div {
    font-family: "Roboto";
  }
`;
export const HardSkills = styled.div`
  margin-top: 1rem;
`;
export const SoftSkills = styled.div`
  margin-top: 1rem;
`;
