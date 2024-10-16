import React from "react";
import Checkbox from "@components/Checkbox.tsx";
import { __published, togglePublished } from "@stores/search.ts";
import { useStore } from "@nanostores/react";

const CheckboxPublished = () => {
  const $checked = useStore(__published);
  return (
    <Checkbox
      id="published"
      checked={$checked}
      toggle={togglePublished}
      label="Published"
    />
  );
};

export default CheckboxPublished;
