import React from "react";
import { storiesOf } from "@storybook/react";
import ConnectedHomepage, { Homepage } from "../components/pages/Homepage/Homepage";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../store";

storiesOf("Homepage", module)
  .addDecorator(story => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>)
  .add("default", () => (
    <Provider store={store}>
      <ConnectedHomepage />
    </Provider>
  ))
  .add("Loading", () => <Homepage films={[]} loading fetchFilmDataRequest={() => null} />);
