import type { PackageKind } from "@localtypes/Package.ts";
import { __kind } from "@stores/search";
import { toLower } from "ramda";
import blem from "blem";
import React from "react";
import "@components/PackageKind.scss";

const PACKAGE_KINDS = ["All", "Library", "Tool", "Fun", "Plugin"];

const PackageKindSelector = () => {
  const bem = blem("PackageKindSelector");
  return (
    <label htmlFor="kind" className={bem("label", ["select", "kind"])}>
      <span className={bem("label-text")}>Kind</span>
      <select
        onChange={(e) => __kind.set(e.target.value as PackageKind)}
        id="kind"
        name="kind"
        className={bem("select", ["kind"])}
        defaultValue={0}
      >
        {PACKAGE_KINDS.map((k: string) => (
          <option value={toLower(k) as PackageKind} key={k}>
            {k}
          </option>
        ))}
      </select>
    </label>
  );
};

export default PackageKindSelector;
