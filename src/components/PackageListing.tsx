import blem from "blem";
import type { Package } from "@localtypes/Package.ts";
import PackageSummary from "@components/PackageSummary.tsx";
import { __filteredPackages } from "@stores/search.ts";
import { useStore } from "@nanostores/react";
import "@components/PackageListing.scss";

const PackageListing = () => {
  const bem = blem("PackageListing");
  const $packages = useStore(__filteredPackages);
  return (
    <ul className={bem("")}>
      {$packages.map((raw: Package) => (
        <li
          key={raw.name}
          className={bem("list-item", [
            `${!raw.published ? "un" : ""}published`,
            `${!raw.official ? "un" : ""}official`,
          ])}
        >
          <PackageSummary {...raw} />
        </li>
      ))}
    </ul>
  );
};

export default PackageListing
