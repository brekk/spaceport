import React from "react";
import Checkbox from "@components/Checkbox.tsx";
import { __official, toggleOfficial } from "@stores/search.ts";
import { useStore } from "@nanostores/react";

const CheckboxOfficial = () => {
  const $checked = useStore(__official);
  return (
    <Checkbox
      id="official"
      checked={$checked}
      toggle={toggleOfficial}
      label="Official"
    />
  );
};

export default CheckboxOfficial;
