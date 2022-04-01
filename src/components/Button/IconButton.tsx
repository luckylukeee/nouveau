import styled from "styled-components";
import Button from "./Button";
import { ButtonProps } from "./types";

const IconButton = styled(Button)<ButtonProps>`
  padding: 0;
  background-color: blue;
  width: ${({ size }) => (size === "sm" ? "32px" : "48px")};
`;

export default IconButton;
