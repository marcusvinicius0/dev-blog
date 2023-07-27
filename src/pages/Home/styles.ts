import styled from "styled-components";

export const BaseHomeContainer = styled.div`
  padding: 2rem 2rem 0 2rem;
`

export const IntroductionContainer = styled.div`
  background: ${(props) => props.theme['white-200']};
  height: 10rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
  padding-top: 1rem;
  text-align: center;

  p {
    margin-bottom: 1rem;
    color: ${props => props.theme['gray-500']};
    letter-spacing: .3rem;
    font-size: 0.875rem;
  }
`;

export const APIContainer = styled.div`

.fatherClass {
  display:flex;
  justify-content: center;
  gap: 20px;
}


.maskClass {
  padding: 40px;
}

.divItemsAPI {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.975rem;
  gap: 2rem;
}

.netflix {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.netflix span {
  word-spacing: 0.3rem;
}

.logo {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
}

.classText {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  flex-direction: column;
  color: ${(props) => props.theme["gray-800"]};
}

.classText h1{
  font-size: 3rem;
  font-weight: 550;
}

p{
  margin-top: 2rem;
}

.textMovies {
  word-spacing: 0.3rem;
}

.textMovies span {
  color: ${(props) => props.theme['red-500']};
}

`
