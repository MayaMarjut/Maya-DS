import React, { Children } from "react";
// import Button from "@mui/material/Button";
import css from "./MdsButton.module.scss";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

//Only include variant, size, color from MuiButtonProps
type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MdsButton = ({ label, handleClick, ...props }: ButtonProps) => {
  return(
    <MuiButton {...props} onClick={handleClick}>{label}</MuiButton>
)
  };

  export default MdsButton;