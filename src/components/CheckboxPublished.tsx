import React from "react";
import Checkbox from "@components/Checkbox.tsx";
import { __published, togglePublished } from "@stores/search.ts";
import { useStore } from "@nanostores/react";
import blem from "blem"

const CheckboxPublished = () => {
  const bem = blem("Searchbar");
  const $checked = useStore(__published);
  return (
    <Checkbox
      bem={bem}
      id="published"
      checked={$checked}
      toggle={togglePublished}
      label="Published"
    />
  );
};

export default CheckboxPublished;
