/**
 * @license MIT
 * @since 0.0.1
 * @author valtterikodisto (kodisto#5558)
 * @summary Tests for Button.tsx component.
 */

import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import Button from "../Button";
import { BaseProps } from "../../../misc/baseComponent";

const BUTTON_LABEL = "Button";
const BASE_PROPS: BaseProps = {
  id: "button-id",
  className: "button-class",
};

describe("<Button />", () => {
  let onClickStub = jest.fn();
  let renderResult: RenderResult;
  let button: HTMLElement;

  beforeEach(() => {
    renderResult = render(
      <Button {...BASE_PROPS} onClick={onClickStub}>
        {BUTTON_LABEL}
      </Button>,
    );
    button = renderResult.getByText(BUTTON_LABEL);
  });

  test("Should call onClick when clicked", () => {
    fireEvent.click(button);
    expect(onClickStub.mock.calls.length).toEqual(1);
  });

  test("Should have base props", () => {
    const itemsByClass = renderResult.container.querySelectorAll(`.${BASE_PROPS.className}`);
    const itemsById = renderResult.container.querySelectorAll(`#${BASE_PROPS.id}`);

    expect(itemsByClass.length).toEqual(1);
    expect(itemsById.length).toEqual(1);
  });
});

describe("<Button /> disabled", () => {
  let onClickStub = jest.fn();
  let renderResult: RenderResult;
  let button: HTMLElement;

  beforeEach(() => {
    renderResult = render(
      <Button {...BASE_PROPS} onClick={onClickStub} disabled>
        {BUTTON_LABEL}
      </Button>,
    );
    button = renderResult.getByText(BUTTON_LABEL);
  });

  test("Should not call onClick when disabled", () => {
    fireEvent.click(button);
    expect(onClickStub.mock.calls.length).toEqual(0);
  });
});
