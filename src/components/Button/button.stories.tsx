import * as React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { DefaultColors } from "../../typings";

import Button from "./index";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

const label = "Colors";
const options: DefaultColors[] = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black"
];
const defaultValue = "red";

stories.add("default", () => (
  <Button
    active={boolean("active", false)}
    className={text("class", "own-button")}
    color={select(label, options, defaultValue)}
    disabled={boolean("disabled", false)}
    onClick={action("onClick")}
  >
    Just button
  </Button>
));
