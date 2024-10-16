import blem from "blem";
import "@components/Tag.scss";

// excluding onClick for now
const Tag = ({ name }) => {
  const bem = blem("tag");
  return <div className={bem("", [name.toLowerCase()])}>{name}</div>;
};

export default Tag
