import { Outlet } from "react-router-dom";
import { HeaderHome } from "../../pages/Home/components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <HeaderHome />
      <Outlet />
    </LayoutContainer>
  );
}
