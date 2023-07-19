import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 1.5rem 2.5rem 0 2.5rem;
`;

export const HeaderContainerChildren = styled.header`
  display: flex;
  justify-content: space-between;

  svg {
    color: ${(props) => props.theme["gray-500"]};
  }

  .navigation-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    h2 {
      color: ${(props) => props.theme["red-500"]};
    }

    .nav-divider {
      height: 1.5rem;

      hr {
        height: 100%;
        border: 1px solid ${(props) => props.theme["gray-500"]};
      }
    }

    nav {
      ul {
        display: flex;
        gap: 1.5rem;
      }

      ul li {
        list-style: none;
        cursor: pointer;
      }
    }
  }

  .auth-container {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    span:first-child {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      cursor: pointer;
      padding: 0.2rem;
      transition: all 0.4s;

      :hover {
        background: ${(props) => props.theme["gray-100"]};
        border-radius: 8px;
      }
    }

    img {
      width: 3rem;
      height: 3rem;

      object-fit: cover;
      border-radius: 50%;
    }
  }
`;
