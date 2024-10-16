import blem from "blem"
import { PackageKind } from "@types/Package.ts"
import PackageSummary from "@components/PackageSummary.tsx"
import { __filteredPackages } from "@stores/search.ts"
import { useStore } from "@nanostores/react"

const PackageListing = () => {
  const bem = blem("PackageListing")
  const $packages = useStore(__filteredPackages)
  return <ul className={bem("")}>
    {packages.map((raw) => (
      <li
        key={raw.name}
        className={bem("list-item", [
          `${!raw.published ? "un" : ""}published`,
          `${!raw.official ? "un" : ""}official`,
        ])}
      >
        <Package {...raw} kind={raw.kind as PackageKind} />
      </li>
    ))}
  </ul>
}
