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
