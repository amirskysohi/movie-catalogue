import React from "react";
import { storiesOf } from "@storybook/react";
import NavBarWidget from "../components/atoms/NavBarWidget/NavBarWidget";
import { MemoryRouter } from "react-router";

storiesOf("NavBarWidget", module)
  .addDecorator(story => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>)
  .add("default", () => <NavBarWidget link="/" title="Home" />);
