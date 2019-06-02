import React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import ErrorComponents from "../components/ErrorComponent";

afterEach(cleanup);

test("insert text in paragraph", () => {
  const { getByTestId } = render(
    <ErrorComponents content="Error fetching and parsing data please try again later" />
  );
  expect(getByTestId("err-msg")).toHaveTextContent(
    "Error fetching and parsing data please try again later"
  );
});
