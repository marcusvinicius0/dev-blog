import { HeaderContainer, HeaderContainerChildren } from "./styles";

import { HiPencilAlt } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";

export function HeaderHome() {
  let isUserAuthenticated = false;

  return (
    <HeaderContainer>
      <HeaderContainerChildren>
        <div className="navigation-container">
          <h2>Boletim</h2>

          <span className="nav-divider">
            <hr />
          </span>

          <nav>
            <ul>
              <li>Stories</li>
              <li>Criador</li>
              <li>Comunidade</li>
              <li>Inscreva-se</li>
            </ul>
          </nav>
        </div>

        <div className="auth-container">
          <span>
            <HiPencilAlt size={20} />
            <b>Escreva</b>
          </span>

          <span>
            <IoMdNotifications size={26} />
          </span>

          <span>
            {!isUserAuthenticated ? (
              <img src="https://github.com/marcusvinicius0.png" />
            ) : (
              <span>
                <FiLogIn />
                Entrar
              </span>
            )}
          </span>
        </div>
      </HeaderContainerChildren>
    </HeaderContainer>
  );
}