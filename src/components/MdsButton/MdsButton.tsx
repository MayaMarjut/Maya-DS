import React, { Children } from "react";
import Button from "@mui/material/Button";
import css from "./MdsButton.module.scss";
import { styled } from "@mui/material/styles";

interface ButtonProps {
  children: string;
  color: "primary" | "secondary" | "success" | "info";
  variant: "contained" | "outlined" | "dashed";
}

const MdsButton = styled(Button)<ButtonProps>(({ theme }) => ({
  ":root": {
    height: `40px`,
    width: `120px`,
    borderRadius: `none`,
  },
}));

export default function StyledMdsButton({
  color,
  children,
  variant,
}: ButtonProps) {
  return (
    <MdsButton
      disableRipple
      disableFocusRipple
      color={color}
      variant={variant}
      onClick={() => console.log(`I was pressed`)}
    >
      {children}
    </MdsButton>
  );
}
