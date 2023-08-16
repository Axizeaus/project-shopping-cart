import { Outlet } from "react-router-dom";
import {
  LayoutContainer,
  Heading,
} from "../components/styles/ProductLayout.styled";

export default function ProductLayout() {
  return (
    <LayoutContainer>
      <Heading>Product Layout</Heading>
      <Outlet />
    </LayoutContainer>
  );
}
