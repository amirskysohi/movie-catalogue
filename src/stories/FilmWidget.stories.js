import React from "react";
import { storiesOf } from "@storybook/react";
import FilmWidget from "../components/molecules/FilmWidget/FilmWidget";
import { MemoryRouter } from "react-router";

const film = {
  title: "Joker",
  rating: 8.6,
  description:
    "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
  releaseDate: "04 October 2019",
  poster: "udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
};

storiesOf("Film Widget", module)
  .addDecorator(story => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>)
  .add("default", () => <FilmWidget {...film} />);
