/**
 * @license MIT
 * @since 0.0.1
 * @author valtterikodisto (kodisto#5558)
 * @summary Button component similiar to the one in the citydao.io website
 */

import React, { forwardRef, useCallback } from "react";
import { BaseProps, getBaseProps } from "../../misc/baseComponent";
import styled from "styled-components";
import { colors } from "../../designTokens";

const StyledButton = styled.button`
  border: none;
  padding: 18px 24px;
  background-color: ${colors.primary};
  opacity: 1;

  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;

  transition: 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export interface ButtonProps extends BaseProps {
  /** The main content of the component */
  children: React.ReactNode;
  /** Renders component unclickable */
  disabled?: boolean;
  /** `onClick` is called if button is clicked and it's not disabled */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, disabled, onClick } = props;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (disabled) {
        event.preventDefault();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    },
    [disabled, onClick],
  );

  return (
    <StyledButton {...getBaseProps(props)} ref={ref} onClick={handleClick}>
      {children}
    </StyledButton>
  );
});

export default Button;
