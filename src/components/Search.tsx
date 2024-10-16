import blem from "blem";
import Telescope from "@assets/react-icons/Telescope.svg.tsx";
import { __search } from "@stores/search.ts";
import { useStore } from "@nanostores/react";
import "@components/Search.scss";

interface Props {
  search?: string;
  placeholder: string;
}

const Search = ({ search = "", placeholder }: Props) => {
  const bem = blem("Search");
  const $search = useStore(__search);
  console.log("$SEARCH", $search);
  return (
    <div
      className={bem("search-wrapper", [
        search === "" ? "waiting" : "searching",
      ])}
    >
      <div className={bem("search-icon-wrapper")}>
        <Telescope className={bem("search-icon")} />
      </div>
      <input
        type="text"
        className="Search__search"
        placeholder={placeholder}
        value={$search}
        onChange={(e) =>
          __search.set(e.target.value)
        }
        id="search-field"
      />
    </div>
  );
};
export default Search;
