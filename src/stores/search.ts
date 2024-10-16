import { atom, computed } from "nanostores";
import { filter, pipe, toLower, includes, curry } from "ramda";
import type { RawPackage, PackageKind, Package } from "@localtypes/Package.ts";
import PACKAGE_DATA from "@data/packages.json";

export const __packages = atom<Package[]>(
  PACKAGE_DATA.map((z) => ({ ...z, kind: z.kind as PackageKind })),
);
export function addPackage(pkg: Package) {
  __packages.set([...__packages.get(), pkg]);
}
export const __search = atom<string>("");
export const _search = computed(__search, toLower);

export const __official = atom<boolean>(false);
export function toggleOfficial() {
  __official.set(!__official.get());
}

export const __published = atom<boolean>(false);
export function togglePublished() {
  __published.set(!__published.get());
}

export const __kind = atom<PackageKind>("all");

const lowerIncludes = curry((s: string, x: string) =>
  pipe(toLower, includes(s))(x),
);

const trace = curry((x: string, y: any) => {
  console.log(x, y);
  return y;
});
export const __filteredPackages = computed(
  [__packages, _search, __official, __published, __kind],
  (pkgs, s, o, p, k) => {
    const match = lowerIncludes(s);
    console.log({ s, o, p, k });
    const filtered = pipe(
      filter((pkg: Package) =>
        s !== "" ? match(pkg.name) || match(pkg.description) : true,
      ),
      filter((pkg: Package) => (k !== "all" ? pkg.kind === k : true)),
      filter((pkg: Package) =>
        p && o
          ? pkg.published && pkg.official
          : p
            ? pkg.published
            : o
              ? pkg.official
              : true,
      ),
    )(pkgs);
    console.log("FILTERED", filtered);
    return filtered;
  },
);
