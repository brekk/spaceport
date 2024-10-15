import React from "react";
import { __search } from "@stores/search.ts";
import { useStore } from "@nanostores/react";
import "@components/SearchField.css";

export const SearchField = ({ placeholder = "" }) => {
  const $search = useStore(__search)
  return (<input
    type="text"
    className="Search__search"
    placeholder={placeholder}
    value={$search}
    onChange={(e) => {
      const newVal = e.target.value
      console.log("NEW VAL", newVal)
      __search.set(newVal)
    }}
    id="search-field"
  />)
}

export default SearchField
