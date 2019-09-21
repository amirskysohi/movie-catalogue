import React from "react";
import { storiesOf } from "@storybook/react";
import NavBar from "../components/molecules/NavBar/NavBar";
import { MemoryRouter } from "react-router";

storiesOf("NavBar", module)
  .addDecorator(story => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>)
  .add("default", () => <NavBar />);
